import React, {useEffect, useState} from "react";
import LoginForm from "../components/LoginForm";
import Router from 'next/router'
import { UserContext } from '../contexts/userContext';

const Index = () => {
	
	//const router = useRouter();
	const [isAuth, setAuth] = useState(false);

	

	useEffect(() => {
		if (localStorage.getItem("auth:token")) {
			Router.push("/project");
		}
	},[]);

	
  	return (
		<LoginForm />
	);
};

export default Index;