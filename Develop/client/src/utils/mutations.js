import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) 
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
  }
`;

export const USER_LOGIN = gql`
  mutation login($username: String, $email: String, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: String!
    $description: String!
    $title: String!
    $authors: [String]
    $image: String
    $link: String
  ) {
    saveBook(
      bookId: $bookId
      description: $description
      title: $title
      authors: $authors
      image: $image
      link: $link
    ) {
      id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
