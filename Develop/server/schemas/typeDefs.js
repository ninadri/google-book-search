const typeDefs = `
    type Book {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        username: String!
        email: String!
        password: String!
        savedBooks: Book
    }   

    type Auth {
        token: ID!
        user: User
    }
    type Query {
        getSingleUser(userId: ID, username: String): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth 
        login(username: String, email: String, password: String!): Auth
        saveBook(bookId: String!, description: String!, title: String!, authors: [String], image: String, link: String): User
        deleteBook(bookId: String!): User 
    }
`;

module.exports = typeDefs;
