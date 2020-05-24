import { ResolverMap } from "../../../types/graphql-utils";
import { listingCacheKey } from "../../../constants";

export const resolvers: ResolverMap = {
    Listing: {
        pictureUrl: (parent, _, { url }) => parent.pictureUrl && `${url}/images/${parent.pictureUrl}`,
        owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
    },

    Query: {
        findListings: async (_, __, { redis }) => {
            const cachedListings = await redis.lrange(listingCacheKey, 0, -1) || [];
            return cachedListings.map((listing: string) => JSON.parse(listing));
        }
    }
};
