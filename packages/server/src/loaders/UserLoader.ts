import * as DataLoader from 'dataloader';
import { User } from '../entity/User';

type BatchUser = (userIds: string[]) => Promise<User[]>

const batchUsers: BatchUser = async (userIds) => {
    const users = await User.findByIds(userIds);

    const userMap: { [key: string] : User } = {};
    users.forEach(u => userMap[u.id] = u);

    return userIds.map(id => userMap[id]);
};

export const userLoader = () => new DataLoader<string, User>(batchUsers);
