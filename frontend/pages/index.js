import React, { useState} from "react";
import { useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
	login(input: $input) {
		jwt
		user {
			id
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

const Home = () => {
	const [loginAccount] = useMutation(LOGIN_MUTATION);
	const [name, setName] = useState();
	

  	return (
    	<div>
      		<form id="login" onSubmit={e => {
				e.preventDefault();
				loginAccount({ variables: {
					"input": {
						"identifier": "test@test.com",
						"password": "password",
						"provider": "local"
					}
				}});
			  }}>
				<label>
						Name:
						<input type="text" name="name" value={name} onChange={() => setName(name)} />
				</label>
				<input type="submit" value="Submit" />
			</form>
    	</div>
  	);
};

export default Home;