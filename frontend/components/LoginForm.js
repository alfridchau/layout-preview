//Libraries
import React, { useState, useEffect} from "react";
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Queries
import LOGIN_QUERY from "../apollo/queries/user/login";

const LoginForm = (logoDisplay, {showStatus}) => {
	
	const router = useRouter();

	const [display, setDisplay] = useState(showStatus);
	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {	
			setDisplay(true);
		}
	}, [display]);


	const [loginAccount, { loading, error }] = useMutation(LOGIN_QUERY, {
		onCompleted({ login }) {
			setDisplay(false);
			localStorage.setItem("auth:token", login.jwt);
			//client.writeData({ data: { isLoggedIn: true } });
			router.push("/projects");
		},
		onError(e) {
			console.log(e)
		}
	});
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div><p>An error occurred</p></div>;
	}

	
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

	// Send to Parent
	const setLogoDisplay = (status) => {
		logoDisplay.onPropsChange(status)
    }
	
	return loading? (
			<div><p>Loading</p></div>
		): display? (
		<React.Fragment>
			<form id="login" onSubmit={e => {
				e.preventDefault();

				setLogoDisplay(false);

				loginAccount({ variables: {
					"input": {
						"identifier": form.name,
						"password": form.password,
						"provider": "local"
					}
				}});
				
				
				}}>
				<div className="form-row">
					<label htmlFor="name">Email:</label>
					<input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
				</div>
				
				<div className="form-row">
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" value={form.password} onChange={handleChange} />
				</div>

				<input type="submit" value="Login" />
			</form>
			<style jsx>{`
				form {
					text-align: center;
					margin-top: 50px;
				}
				.form-row {
					margin-bottom: 20px;
				}
				label {
					width: 60px;
					margin-right: 30px;
					display: inline-block;
					text-align: left;
					line-height: 200%;
				}
				input {
					border: solid 1px #212322;
					line-height: 200%;
					color: #212322;
					padding-left: 10px;
					padding-right: 10px;
					&[type="submit"] {
						margin: 0 auto;
						cursor: pointer;
					}
				}
			`}</style>
    	</React.Fragment>
  	): null;
};

export default LoginForm;