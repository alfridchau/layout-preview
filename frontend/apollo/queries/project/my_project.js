import gql from "graphql-tag";

const MY_PROJECT_QUERY = gql`  
    query MyProject($id: ID!) {
        myProject(id: $id) {
            name
        }
    }
`;

export default MY_PROJECT_QUERY; 