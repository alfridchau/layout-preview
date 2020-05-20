import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
	login(input: $input) {
		jwt
		user {
			id
			username
			email
			confirmed
			blocked
			role {
				id
				name
				description
				type
			}
		}
  	}
}
`

export default LOGIN_MUTATION;