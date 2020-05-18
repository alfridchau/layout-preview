import React, { useState, useEffect} from "react";
import Query from "../components/query"; 

import PROJECT_QUERY from "../apollo/queries/project/project";

import Project_Title from "../components/project_title";
import Versions_Select from "../components/versions_select";

const Home = () => {
	

  	return (
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
								
							)
            			}}
          			</Query>
      		</div>
    	</div>
  	);
};

export default Home;