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
	const [form, setForm] = useState({
		name: "",
		password: ""
	});
	
	const handleChange = (e) => {
		const value = e.target.value;
		setForm({
			...form,
			[e.target.name]: value
		});
	}

  	return (
    	<div>
      		<form id="login" onSubmit={e => {
				e.preventDefault();
				loginAccount({ variables: {
					"input": {
						"identifier": form.name,
						"password": form.password,
						"provider": "local"
					}
				}});
			  }}>
				<label>
						Name:
						<input type="text" name="name" value={form.name} onChange={handleChange} />
				</label>
				<label>
						Password:
						<input type="password" name="password" value={form.password} onChange={handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
    	</div>
  	);
};

export default Home;