import { withFilter } from 'graphql-yoga';

import { ResolverMap } from "../../../types/graphql-utils";
import { PUBSUB_NEW_MESSAGE } from "../shared/constant";

export const resolvers: ResolverMap = {
    Subscription: {
        newMessage: {
            subscribe: withFilter(
                (_, __, { pubSub }) => pubSub.asyncIterator(PUBSUB_NEW_MESSAGE),
                (payload, variables) => payload.newMessage.listingId === variables.listingId)
        }
    }
};
