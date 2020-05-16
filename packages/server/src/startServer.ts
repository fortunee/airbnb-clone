import "reflect-metadata";
import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as RateLimit from "express-rate-limit";
import * as RateLimitRedisStore from "rate-limit-redis";
import { applyMiddleware } from "graphql-middleware";
import * as express from "express";
import { RedisPubSub } from "graphql-redis-subscriptions";

import { redis } from "./redis";
import { middleware } from "./middleware";
import { createTypeormConn } from "./utils/createTypeormConn";
import { confirmEmail } from "./routes/confirmEmail";
import { genSchema } from "./utils/genSchema";
import { redisSessionPrefix } from "./constants";
import { createTestConn } from "./testUtils/createTestConn";
import { userLoader } from "./loaders/UserLoader";

const SESSION_SECRET = "ajslkjalksjdfkl";
const RedisStore = connectRedis(session as any);

export const startServer = async () => {
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  const schema = genSchema() as any;
  applyMiddleware(schema, middleware);

  const isProdEnv = process.env.NODE_ENV === "production";

  const pubSub = new RedisPubSub(
    isProdEnv ? { connection: process.env.REDIS_URL as any } : {}
  );

  const server = new GraphQLServer({
    schema,
    context: ({ request, response }) => ({
      redis,
      pubSub,
      url: request ? request.protocol + "://" + request.get("host") : "",
      session: request ? request.session : undefined,
      req: request,
      res: response,
      userLoader: userLoader(),
    }),
  });

  server.express.use(
    new RateLimit({
      store: new RateLimitRedisStore({
        client: redis,
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      delayMs: 0, // disable delaying - full speed until the max limit is reached
    })
  );

  server.express.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix,
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    } as any)
  );

  server.express.use("/images", express.static("images"));

  const FRONTEND_HOST =
    process.env.FRONTEND_HOST || "https://sad-wilson-e47353.netlify.com";
  const cors = {
    credentials: true,
    origin: process.env.NODE_ENV === "test" ? "*" : (FRONTEND_HOST as string),
  };

  server.express.get("/confirm/:id", confirmEmail);

  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    const conn = await createTypeormConn();
    await conn.runMigrations();
  }

  const port = process.env.PORT || 4000;
  const app = await server.start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : port,
  });
  console.log(`Server is running on localhost:${port}`);

  return app;
};
