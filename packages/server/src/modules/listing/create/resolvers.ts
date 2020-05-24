import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { processUpload } from "../shared/processUpload";
import { listingCacheKey } from "../../../constants";

export const resolvers: ResolverMap = {
    Mutation: {
        createListing: async (_, { input: { picture, ...data } }, { session, redis }) => {
            // if (!session.userId) {
            //     throw new Error('Not Authenticated!');
            // }

            const pictureUrl = picture ? await processUpload(picture) : null;;
            
            const listing = await Listing.create({
                ...data,
                pictureUrl,
                userId: session.userId
            }).save();

            await redis.lpush(listingCacheKey, JSON.stringify(listing))

            return true;
        }
    }
};
