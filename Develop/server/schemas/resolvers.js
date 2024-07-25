const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);

      if (!user) {
        throw new AuthenticationError("Something is wrong!");
      }

      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({
        email,
      });

      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Wrong password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { bookData }, context) => {
      if (!context.user) {
        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: bookData } },
          { new: true }
        );

        return user;
      }
      throw new AuthenticationError("You need to be logged in");
    },
    deleteBook: async (parent, { bookId }, contextç) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
      }
      throw new AuthenticationError("Couldn't find user with this id!");
    },
  },
};

module.exports = resolvers;
