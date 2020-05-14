import gql from "graphql-tag";

const LAYOUTS_QUERY = gql`  
  query Layouts {
    projects {
      id
      name
    }
  }
`;

export default PROJECTS_QUERY; 