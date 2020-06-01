//Libraries
import React, { useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Link from 'next/link';

//Queries
import MY_PROJECTS_QUERY from "../apollo/queries/project/my_projects";

const ProjectList = () => {
	const router = useRouter();
	
	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			router.push("/");
		}
	});
	


	// disable query cache if user change
	const { data: data, loading: loading, error: error } = useQuery(MY_PROJECTS_QUERY,{ fetchPolicy: "network-only" });
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div>Error!</div>;
	}

	
	 

	useEffect(() => {
		if (data) {
			let projects = data.myProjects;
			if (projects.length == 1) {
				router.push("/projects/[uid].js" ,`/projects/${projects[0].uid}`)
			}
		}
	}, [data]);

  	return loading? (
		  <div>
			  <p>Loading</p>
		  </div>
	  ): (
		<div>
			<div className="uk-section">
				<h1>Projects</h1>
				<ul>
				
			</ul>
		</div>
	</div>
	  );
};

export default ProjectList;