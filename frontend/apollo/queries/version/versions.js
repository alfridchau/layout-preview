import gql from "graphql-tag";

const VERSIONS_QUERY = gql`
	query Versions($uid: String!) {
        myProject(uid: $uid) {
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

export default VERSIONS_QUERY;