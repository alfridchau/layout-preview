import gql from "graphql-tag";

const MY_PROJECTS_QUERY = gql`  
    query MyProjects {
        myProjects {
            uid
            name
        }
    }
`;

// projects(where: {
//     user:{
//         email: $email
//     }
// })
// {
//     id
//     uid
//     name
// }

export default MY_PROJECTS_QUERY; 