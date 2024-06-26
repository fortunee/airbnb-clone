import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Platform } from 'react-native';
import { createUploadLink } from 'apollo-upload-client';

const host = Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000';

export const client = new ApolloClient({
  link:
    createUploadLink({
      uri: host,
    }),
  cache: new InMemoryCache()
});
