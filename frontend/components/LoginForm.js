//Libraries
import React, { useState, useEffect} from "react";
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Queries
import LOGIN_QUERY from "../apollo/queries/user/login";

const LoginForm = () => {

	const [isLoading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem("auth:token")) {
			
			router.push("/projects");
		} else {
			setLoading(false)
		}
		
	},[isLoading]);
	

	

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