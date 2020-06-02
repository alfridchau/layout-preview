//Libraries
import React, { useState, useEffect} from "react";
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Queries
import LOGIN_QUERY from "../apollo/queries/user/login";

const LoginForm = ({showStatus}) => {

	const [display, setDisplay] = useState(showStatus);
	const router = useRouter();


	const [loginAccount, { loading, error }] = useMutation(LOGIN_QUERY, {
		onCompleted({ login }) {
			localStorage.setItem("auth:token", login.jwt);
			//client.writeData({ data: { isLoggedIn: true } });
			router.push("/projects");
		},
		onError(e) {
			console.log(e)
		}
	});
	if (loading) {
		return <div><p>Loading</p></div>;
	}

	if (error) {
	  console.error(JSON.stringify(error));
	  return <div><p>An error occurred</p></div>;
	}

	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {	
			setDisplay(true)
		}
	}, [display]);



	
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
	
	
	

	return display? (
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
  	): null;
};

export default LoginForm;