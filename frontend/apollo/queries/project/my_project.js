import gql from "graphql-tag";

const MY_PROJECT_QUERY = gql`  
    query MyProject($uid: String!) {
        myProject(uid: $uid) {
            name
        }
    }
`;

export default MY_PROJECT_QUERY;