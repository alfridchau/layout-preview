//Core
import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Components
import LoginForm from "../components/LoginForm";

//Queries
import PAGE_INDEX_QUERY from "../apollo/queries/page/index";

const Index = () => {
	const router = useRouter();
	
	useEffect(() => {
		if (localStorage.getItem("auth:token")) {	
			
			router.push("/projects");
		}
	});

	const [background, setBackground] = useState();
	const { data: data, loading: loading, error: error } = useQuery(PAGE_INDEX_QUERY);
	
	

	if (error) {
	  console.error(JSON.stringify(error));
	  return <div><p>An error occurred</p></div>;
	}

	useEffect(() => {
		let unmounted = false;
		if (data != null) {
			setBackground(data.login.background.url);
		}
		return () => {
			unmounted = true;
		};
	}, []);
	

  	return (
		  <React.Fragment>
				<LoginForm canDisplay={false} />
				<style jsx global>{`
					body {
						background-image: url(${background})
					}
				`}</style>
		  </React.Fragment>
	);
};

export default Index;