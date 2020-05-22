import React, { useState, useEffect} from "react";
import Query from "../components/query"; 
import Router from 'next/router';
import PROJECT_QUERY from "../apollo/queries/project/project";

import Project_Title from "../components/project_title";
import Versions_Select from "../components/versions_select";

const Project = () => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (!localStorage.getItem("auth:token")) {
			Router.push("/");
		} else {
			setLoading(false)
		}
	}, [isLoading]);

  	return isLoading == true? (
		  <div>
			  <p>Loading</p>
		  </div>
	  ): (
    	<div>
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
    	</div>
  	);
};

export default Project;