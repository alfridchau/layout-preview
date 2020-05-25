import React, { useState, useEffect} from "react";
import Query from "../components/query"; 
import { useQuery } from '@apollo/react-hooks';
import Router from 'next/router';

//Queries
import MY_PROJECTS_QUERY from "../apollo/queries/user/projects";


import Project_Title from "../components/project_title";
import Versions_Select from "../components/versions_select";

const Project = ({email}) => {
	const [isLoading, setLoading] = useState(true);
	
	
	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			Router.push("/");
		} else {
			//getUserEmail();
			setLoading(false);
		}
	}, [isLoading]);



	const { data: data, loading: loading, error: error } = useQuery(MY_PROJECTS_QUERY, {
		variables: { email: "test@test.com" },
	});
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div>Error!</div>;
	}
 

  	return isLoading == true? (
		  <div>
			  <p>Loading</p>
		  </div>
	  ): (
    	<div>
      		<div className="uk-section">
				{/* <Query query={MY_PROJECTS_QUERY} email={email}>
					{({data: { project }}) => {
						return (
							<div className="uk-container uk-container-large">
							<Project_Title name={project.name} />
							<label>Layout Versions:</label>
							<Versions_Select versions={project.version} project_uid={project.uid} />
						</div>				
					)}}
				</Query> */}
			</div>
    	</div>
  	);
};

export async function getServerSideProps(context) {
	console.log(context.query)
	let email = "test@test.com"
	return {
	  props: {
		  email
	  }, // will be passed to the page component as props
	}
  }

export default Project;