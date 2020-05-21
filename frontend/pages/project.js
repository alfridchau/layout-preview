import React, { useState, useEffect, useContext} from "react";
import Query from "../components/query"; 
import { useRouter } from 'next/router'
import PROJECT_QUERY from "../apollo/queries/project/project";

import Project_Title from "../components/project_title";
import Versions_Select from "../components/versions_select";

import { UserContext } from '../contexts/userContext';

const Project = () => {
	const { user, storeUser } = useContext(UserContext);
	const router = useRouter();
	let projectForm = (
		<div className="uk-section">		
			<Query query={PROJECT_QUERY} id="5ec26d192c97bd1a51591bf5">
				{({data: { project }}) => {
					return (
						<div className="uk-container uk-container-large">
						<Project_Title name={project.name} />
						<label>Layout Versions:</label>
						<Versions_Select versions={project.version} projectID={project.id} />
					</div>				
				)}}
			</Query>
		</div>
	);

	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			projectForm = "";
			router.push("/");
		}
	});

  	return (
    	<div>
      		{projectForm}
    	</div>
  	);
};

export default Project;