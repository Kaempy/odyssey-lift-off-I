import { Resolvers } from './types';

const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_parent, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _args, { dataSources }, _info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export { resolvers };
