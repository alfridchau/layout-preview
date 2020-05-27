import gql from "graphql-tag";

const MY_PROJECT_QUERY = gql`  
    query MyProject($uid: String!) {
        myProject(uid: $uid) {
            name
            version {
				id
				version_number
				desktop_layout {
					layout {
						name
						hash
						ext
						caption
					}
					prototype_url
				}
				tablet_layout {
					layout {
						name
						hash
						ext
						caption
					}
					prototype_url
				}
				mobile_layout {
					layout {
						name
						hash
						ext
						caption
					}
					prototype_url
				}
			}
        }
    }
`;

export default MY_PROJECT_QUERY;