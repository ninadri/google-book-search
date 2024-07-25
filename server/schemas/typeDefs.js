const typeDefs = `
  input BookInput {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
    type Book {
        authors: [String]
        description: String!
        bookId: ID!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }   

    type Auth {
        token: ID!
        user: User
    }
    type Query {
        getMe: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth 
        login(email: String!, password: String!): Auth
        savedBooks(bookInput: BookInput): User
        deleteBook(bookId: String!): User 
    }
`;

module.exports = typeDefs;
