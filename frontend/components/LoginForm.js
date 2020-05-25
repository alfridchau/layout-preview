import React, { useState, useEffect} from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
import LOGIN_QUERY from "../apollo/queries/user/login";
import USER_PROJECTS_QUERY from "../apollo/queries/user/projects";

const LoginForm = () => {

	const [isLoading, setLoading] = useState(true);
	const [projectUID, setProjectUID] = useState();

	useEffect(() => {
		if (localStorage.getItem("auth:token")) {
			
			Router.push("/project")
		} else {
			setLoading(false)
		}
		
	},[isLoading]);
	

	

	const [loginAccount, { loading, error }] = useMutation(LOGIN_QUERY, {
		onCompleted({ login }) {
			localStorage.setItem("auth:token", login.jwt);
			localStorage.setItem("email", login.user.email);
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

	
	if (loading) return <p>Loading</p>;
	if (error) return <p>An error occurred</p>;

	return isLoading == true? (
		<div>
			<p>Loading</p>
		</div>
	): (
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