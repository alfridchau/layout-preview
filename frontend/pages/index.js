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

	const [background, setBackground] = useState("#FFFFFF");
	const { data: data, loading: loading, error: error } = useQuery(PAGE_INDEX_QUERY);
	
	

	if (error) {
	  console.error(JSON.stringify(error));
	  return <div><p>An error occurred</p></div>;
	}

	useEffect(() => {
		
		if (data != null) {
			setBackground("url("+data.login.background.url+")");
		}
	}, [data]);
	

  	return loading? (
		<div>
			<p>An error occurred</p>
		</div>
	): (
		<React.Fragment>
			<LoginForm showStatus={false} />
			<style jsx global>{`
				body {
					background: ${background};
					background-size: cover;
					background-repeat: no-repeat;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Index;