import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { processUpload } from "../shared/processUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (
      _,
      { listingId, input: { picture, ...data } },
      { session }
    ) => {
      // if (!session.userId) {
      //     throw new Error('Not Authenticated!');
      // }

      //   const pictureUrl = picture ? await processUpload(picture) : null;
      if (picture) {
        data.pictureUrl = await processUpload(picture);
      }

      await Listing.update(
        {
          id: listingId,
        },
        {
          ...data,
        }
      );

      return true;
    },
  },
};
