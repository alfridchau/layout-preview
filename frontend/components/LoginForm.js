import React, { useState, useContext, useEffect} from "react";
import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
import LOGIN_QUERY from "../apollo/queries/user/login";
import { UserContext } from '../contexts/userContext';

const LoginForm = () => {

	
	//const client = useApolloClient();
	const { user, storeUser } = useContext(UserContext);


	// useEffect(() => {
	// 	if (Object.keys(user).length > 0 && user.constructor === Object) {
	// 		projectForm = "";
	// 		router.push("/project");
	// 	}
	// })

	const [loginAccount, { loading, error }] = useMutation(LOGIN_QUERY, {
		onCompleted({ login }) {
			localStorage.setItem("auth:token", login.jwt);
			storeUser(login.user);
			
			//client.writeData({ data: { isLoggedIn: true } });
			Router.push("/project");
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

	useEffect(() => {
		// Prefetch the dashboard page as the user will go there after the login
		Router.prefetch('/dashboard')
	  }, [])

	
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

export default LoginForm;