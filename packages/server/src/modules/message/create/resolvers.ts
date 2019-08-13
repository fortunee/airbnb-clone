import { ResolverMap } from "../../../types/graphql-utils";
import { Message } from "../../../entity/Message";
import { PUBSUB_NEW_MESSAGE } from "../shared/constant";

export const resolvers: ResolverMap = {
    Mutation: {
        createMessage: async (_, { message }, { session, pubSub }) => {
            
            const dbMessage = await Message.create({
                ...message,
                userId: session.userId
            }).save();

            pubSub.publish(PUBSUB_NEW_MESSAGE, {
                newMessage: dbMessage
            });

            return true;
        }
    }
};
