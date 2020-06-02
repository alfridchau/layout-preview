//Core
import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Components
import IndexLogo from "../components/IndexLogo";
import LoginForm from "../components/LoginForm";

//Queries
import PAGE_INDEX_QUERY from "../apollo/queries/page/index";

const Index = () => {
	const router = useRouter();

	const [background, setBackground] = useState("#FFFFFF");
	const [logo, setLogo] = useState();
	const { data: data, loading: loading, error: error } = useQuery(PAGE_INDEX_QUERY);
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div><p>An error occurred</p></div>;
	}

	useEffect(() => {
		if (localStorage.getItem("auth:token")) {	
			router.push("/projects");
		}
	}, []);

	useEffect(() => {
		if (data != null) {
			setLogo(data.login.logo.url)
			setBackground("url("+data.login.background.url+")");
		}
	}, [data]);

	const [logoDisplay, setLogoDisplay] = useState(true);
	

  	return loading? (
		<div>
			<p>Loading</p>
		</div>
	): (
		<React.Fragment>
			<div className="form">
				<IndexLogo logo={logo} showStatus={logoDisplay} />
				<LoginForm showStatus={false} onchange={(e) => { setLogoDisplay(e) }} />
			</div>
			<style jsx global>{`
				.form {
					position: absolute;
					top: 50%;
  					left: 50%;
					transform: translate(-50%, -50%);
				}
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