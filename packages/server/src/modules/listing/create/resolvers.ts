import * as shortId from 'shortid';
import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { createWriteStream } from 'fs';

const storeUpload = async (stream: any, mimetype: string) => {
    const extension = mimetype.split('/')[1];
    const id = `${shortId.generate()}.${extension}`;
    const path = `images/${id}`;

    return new Promise((resolve, reject) => 
            stream
                .pipe(createWriteStream(path))
                .on('finish', () => resolve({ id, path }))
                .on('error', reject)
        )
}

const processUpload = async(upload: any) => {
    const { stream, mimetype } = await upload;
    const { id }: any = await storeUpload(stream, mimetype);
    return id;

}

export const resolvers: ResolverMap = {
    Mutation: {
        createListing: async (_, { input: { picture, ...data } }, { session }) => {
            // if (!session.userId) {
            //     throw new Error('Not Authenticated!');
            // }

            const pictureUrl = await processUpload(picture);
            
            await Listing.create({
                ...data,
                pictureUrl,
                userId: session.userId
            }).save();

            return true;
        }
    }
};
