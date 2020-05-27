import gql from "graphql-tag";

const MY_PROJECT_QUERY = gql`  
    query MyProject($uid: String!) {
        myProject(uid: $uid) {
            name
            version {
				version_number
				desktop_layout {
					layout {
						name
						hash
						ext
					}
				}
				tablet_layout {
					layout {
						name
						hash
						ext
					}
				}
				mobile_layout {
					layout {
						name
						hash
						ext
					}
				}
			}
        }
    }
`;

export default MY_PROJECT_QUERY;