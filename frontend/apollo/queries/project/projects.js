import gql from "graphql-tag";

const PROJECTS_QUERY = gql`  
	query Projects {
		projects {
			id
			name
			version {
				id
				version_number
				desktop_layout {
					prototype_url
					layout {
						name
					}
				}
				tablet_layout {
					prototype_url
					layout {
						name
					}
				}
				mobile_layout {
					prototype_url
					layout {
						name
					}
				}
			}
		}
	}
`;

export default PROJECTS_QUERY; 