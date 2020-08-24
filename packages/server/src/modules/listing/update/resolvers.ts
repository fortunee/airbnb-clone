import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { processUpload } from "../shared/processUpload";
import { getConnection } from "typeorm";
import { listingCacheKey } from "../../../constants";

export const resolvers: ResolverMap = {
  Mutation: {
    updateListing: async (
      _,
      { listingId, input: { picture, ...data } },
      { redis }
    ) => {
      if (picture) {
        data.pictureUrl = await processUpload(picture);
      }

      const {
        raw: [updatedListing],
      } = await getConnection()
        .createQueryBuilder()
        .update(Listing)
        .set(data)
        .where("id = :id", { id: listingId })
        .returning("*")
        .execute();

      const redisIndex = (await redis.lrange(listingCacheKey, 0, -1)).findIndex(
        (x: string) => JSON.parse(x).id === listingId
      );
      await redis.lset(
        listingCacheKey,
        redisIndex,
        JSON.stringify(updatedListing)
      );

      return true;
    },
  },
};
