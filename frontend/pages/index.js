//Core
import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Components
import LoginForm from "../components/LoginForm";

//Queries
import PAGE_INDEX_QUERY from "../apollo/queries/page/index";

const Index = () => {
	const [background, setBackground] = useState();
	const { data: data, loading: loading, error: error } = useQuery(PAGE_INDEX_QUERY);
	const router = useRouter();
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div>Error!</div>;
	}
	useEffect(() => {
		if (localStorage.getItem("auth:token")) {	
			//router.push("/projects");
		}
	}, []);
	useEffect(() => {
		if (data) {
			setBackground(data.login.background.url);
		}
	}, [data])

  	return loading? (
		<div>Loading...</div>
	): (
		  <React.Fragment>
				<LoginForm />
				<style jsx global>{`
					body {
						background-image: url(${background})
					}
				`}</style>
		  </React.Fragment>
	);
};

export default Index;