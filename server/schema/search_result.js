const {
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const SearchResult = new GraphQLObjectType({
  name: "SearchResult",
  fields: {
    title: {
      type: GraphQLString,
      resolve: (result) => result.Title,
    },
    year: {
      type: GraphQLString,
      resolve: (result) => result.Year,
    },
    imdbId: {
      type: GraphQLString,
      resolve: (result) => result.imdbID,
    },
    type: {
      type: GraphQLString,
      resolve: (result) => result.Type,
    },
    poster: {
      type: GraphQLString,
      resolve: (result) => result.Poster,
    },
  },
});

module.exports = SearchResult;
