import gql from "graphql-tag";

const PAGE_INDEX_QUERY = gql`  
    query Index {
        login {
            logo {
                url
            }
            background {
                url
            }
        
        }
    }
`;

export default PAGE_INDEX_QUERY; 