import gql from "graphql-tag";

const PROJECT_QUERY = gql`  
  query Projects($id: ID!) {
    project(id: $id) {
      name
    }
  }
`;

export default PROJECT_QUERY;