import React, {useEffect, useContext} from "react";
import Login from "../components/Login";

import { UserContext } from '../contexts/userContext';
import Router from 'next/router'

const Home = () => {
	const { user, storeUser } = useContext(UserContext);

	
	
	let loginComponent = "";
	if (Object.keys(user).length === 0 && user.constructor === Object) {
		loginComponent = <Login />;
	} else {
		useEffect(() => {
			Router.push("/project")
		}, [])
	}
  	return (
		<div>
			{loginComponent}
		</div>
  	);
};

export default Home;