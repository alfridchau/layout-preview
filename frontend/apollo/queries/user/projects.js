import gql from "graphql-tag";

const USER_PROJECTS_QUERY = gql`  
    query Projects($email: String!) {
        projects(where: {
            user:{
                email: $email
            }
        })
        {
            id
            uid
            name
        }
    }
`;

export default USER_PROJECTS_QUERY; 