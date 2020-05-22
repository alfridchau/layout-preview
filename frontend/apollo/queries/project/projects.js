import gql from "graphql-tag";

const PROJECTS_QUERY = gql`  
	query Projects {
		projects {
			id
			name
			version {
				id
				version_number
				prototype_url
				desktop_layout {
					layout {
					name
					}
				}
				tablet_layout {
					layout {
					name
					}
				}
				mobile_layout {
					layout {
					name
					}
				}
			}
		}
	}
`;

export default PROJECTS_QUERY; 