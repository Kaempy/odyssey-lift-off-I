import gql from 'graphql-tag';

const typeDefs = gql`
  "type definition for Track"
  type Track {
    "Unique identifier for each track"
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }
  type Module {
    id: ID!
    title: String!
    length: Int
  }
  "type definition for Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
  "Query to get tracks array for the home page"
  type Query {
    "Get all tracks for home page"
    tracksForHome: [Track!]!
    track(id: ID!): Track!
  }
`;
export { typeDefs };
