//Core
import React, {useEffect, useState} from "react";

//Components
import LoginForm from "../components/LoginForm";

const Index = () => {
	
	const [isLoading, setLoading] = useState(true);
	
	useEffect(() => {
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