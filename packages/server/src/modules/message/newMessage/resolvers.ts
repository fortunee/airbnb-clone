import { ResolverMap } from "../../../types/graphql-utils";
import { PUBSUB_NEW_MESSAGE } from "../shared/constant";

export const resolvers: ResolverMap = {
    Subscription: {
        newMessage: {
            subscribe: async (_, __, { pubSub }) => {
                return pubSub.asyncIterator(PUBSUB_NEW_MESSAGE);
            }
        }
    }
};
