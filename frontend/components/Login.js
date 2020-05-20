import React, { useState, useContext} from "react";
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import LOGIN_QUERY from "../apollo/queries/user/login";
import { UserContext } from '../contexts/userContext';

const Login = () => {
	
	
	const router = useRouter();
	const client = useApolloClient();
	const { user, storeUser } = useContext(UserContext);

	const [loginAccount, { loading, error }] = useMutation(LOGIN_QUERY, {
		onCompleted({ login }) {
			localStorage.setItem("auth:token", login.jwt);
			storeUser(login.user)
			client.writeData({ data: { isLoggedIn: true } });
			router.push("/project");
		},
		onError(e) {
			console.log(e)
		}
	  });
	
	const [form, setForm] = useState({
		name: "test@test.com",
		password: "password"
	});
	
	const handleChange = (e) => {
		const value = e.target.value;
		setForm({
			...form,
			[e.target.name]: value
		});
	}

	
	if (loading) return <p>Loading</p>;
  	if (error) return <p>An error occurred</p>;
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
						Email:
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

export default Login;