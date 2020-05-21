import React, {useEffect, useState} from "react";
import LoginForm from "../components/LoginForm";
import Router from 'next/router';
const Index = () => {
	
	const [isAuth, setAuth] = useState(false);
	let component = "";

	useEffect(() => {
		if (localStorage.getItem("auth:token")) {
			setAuth(true);
		} else {
			setAuth(false);
		}
	},[]);

	console.log(isAuth)
	if (isAuth == false) {
		component = <LoginForm />
	} else {
		
		component = "";
		Router.push("/project")
	}
  	return (
		  <div>
			  {component}
		  </div>
		
	);
};

export default Index;