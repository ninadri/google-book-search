import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  query getSingleUser {
    user {
      _id
      username
    }
  }
`;
