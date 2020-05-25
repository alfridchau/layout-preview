import gql from "graphql-tag";

const EMAIL_QUERY = gql`
  query Me {
	me {
		email
  	}
}
`

export default EMAIL_QUERY;