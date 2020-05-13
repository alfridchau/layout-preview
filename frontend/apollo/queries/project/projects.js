import gql from "graphql-tag";

const PROJECTS_QUERY = gql`  
  query Projects {
    projects {
      id
      name
    }
  }
`;

export default PROJECTS_QUERY; 