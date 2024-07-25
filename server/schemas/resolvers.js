const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError("You need to be logged in");
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);

      if (!user) {
        throw AuthenticationError("Something is wrong!");
      }

      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({
        email,
      });

      if (!user) {
        throw AuthenticationError("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError("Wrong password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    savedBooks: async (parent, { bookInput }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookInput } },
          { new: true }
        );

        return user;
      }
      throw AuthenticationError("You need to be logged in");
    },
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true }
          );

          if (!updatedUser) {
            throw new Error("Failed to delete the book");
          }

          return updatedUser;
        } catch (err) {
          throw new Error("Failed to delete the book");
        }
      }

      throw new AuthenticationError("You need to be logged in");
    },
  },
};

module.exports = resolvers;
