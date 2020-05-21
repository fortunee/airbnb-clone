import * as shortId from 'shortid';
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

export const processUpload = async(upload: any) => {
  const { stream, mimetype } = await upload;
  const { id }: any = await storeUpload(stream, mimetype);
  return id;

}
