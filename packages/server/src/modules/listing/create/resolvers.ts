import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { processUpload } from "../shared/processUpload";

export const resolvers: ResolverMap = {
    Mutation: {
        createListing: async (_, { input: { picture, ...data } }, { session }) => {
            // if (!session.userId) {
            //     throw new Error('Not Authenticated!');
            // }

            const pictureUrl = picture ? await processUpload(picture) : null;;
            
            await Listing.create({
                ...data,
                pictureUrl,
                userId: session.userId
            }).save();

            return true;
        }
    }
};
