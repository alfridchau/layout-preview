import gql from "graphql-tag";

const MY_PROJECT_QUERY = gql`  
    query MyProject($uid: String!) {
        myProject(uid: $uid) {
			name
			page {
				id
				name
				desktop {
					version {
						id
						version_number
						image {
							id
							name
							url
							width
						}
					}
				}
				tablet {
					version {
						id
						version_number
						image {
							id
							name
							url
							width
						}
					}
				}
				mobile {
					version {
						id
						version_number
						image {
							id
							name
							url
							width
						}
					}
				}
			}
        }
    }
`;

export default MY_PROJECT_QUERY;