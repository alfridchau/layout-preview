import gql from "graphql-tag";

const PROJECT_QUERY = gql`  
  	query Projects($id: ID!) {
    	project(id: $id) {
			id
			uid
      		name
      		version {
        		id
        		version_number
      		}
		}
  	}
`;

export default PROJECT_QUERY;