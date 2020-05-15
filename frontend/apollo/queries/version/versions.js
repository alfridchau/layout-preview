import gql from "graphql-tag";

const VERSION_QUERY = gql`  
  query Projects($id: ID!) {
    project(id: $id) {
      version {
          id
          version_number
      }
    }
  }
`;

export default VERSION_QUERY;