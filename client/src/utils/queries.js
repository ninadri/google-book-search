import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getMe {
    getMe {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
