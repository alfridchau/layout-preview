import React, { useState, useEffect} from "react";
import Query from "../components/query"; 

import PROJECT_QUERY from "../apollo/queries/project/project";
import Project from "../components/project";

import Versions_Select from "../components/versions_select";

const Home = () => {
	

  	return (
    	<div>
      		<div className="uk-section">
        		
	  	 			<Query query={PROJECT_QUERY} id="1">
						{({data: { project }}) => {
							return (
								<div className="uk-container uk-container-large">
									<Project project={project} />
									<label>Layout Versions:</label>
									<Versions_Select project={project} />
								</div>
								
							)
            			}}
          			</Query>
      		</div>
    	</div>
  	);
};

export default Home;