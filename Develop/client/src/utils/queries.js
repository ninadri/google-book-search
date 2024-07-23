import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  {
    getSingleUser {
      _id
      username
      email
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
