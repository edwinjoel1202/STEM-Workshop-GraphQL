const { GraphQLError } = require('graphql');

const movieResolvers = {
  Query: {
    moviesByGenre: async (_, { genre }, { Movies }) => {
      try {
        const movies = await Movies.find({ genre: genre });
        return movies;
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
  },
};

module.exports = movieResolvers;