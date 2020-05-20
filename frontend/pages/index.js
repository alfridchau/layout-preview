import React, {useEffect, useContext} from "react";
import LoginForm from "../components/LoginForm";
import { useRouter } from 'next/router'
import { UserContext } from '../contexts/userContext';

const Index = () => {
	
	const router = useRouter();
	let loginComponent;

	let token = null;
	useEffect(() => {
		if (localStorage.getItem("auth:token")) {
			token = localStorage.getItem("auth:token");
			loginComponent = "";
			router.push("/project");
		} else {
			loginComponent = <LoginForm />;
		}
	});
	
  	return (
		<div>
			{token? "": loginComponent}
		</div>
  	);
};

export default Index;