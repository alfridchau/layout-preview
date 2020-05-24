import React, {useEffect, useState} from "react";
import LoginForm from "../components/LoginForm";
import Router from 'next/router';
const Index = () => {
	
	const [isLoading, setLoading] = useState(true);
	
	useEffect(() => {
		// if (localStorage.getItem("auth:token")) {
		// 	Router.push("/project/[uid]", "/project/abc")
		// } else {
		// 	setLoading(false)
		// }
		setLoading(false)
	},[isLoading]);
	
  	return isLoading == true? (
		  <div>
			  <p>Loading</p>
		  </div>
	): (
		  <div>
			  <LoginForm />
		  </div>
	);
};

export default Index;