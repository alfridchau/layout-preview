import React from "react";  
import Query from "../components/query"; 

import PROJECT_QUERY from "../apollo/queries/project/project";
import Project from "../components/project";

import VERSIONS_QUERY from "../apollo/queries/version/versions";
import Versions from "../components/versions";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
	  	 <Query query={PROJECT_QUERY} id="1">
			{
				({data: { project }}) => {
				  	return <Project name={project.name} />;
            	}}
          </Query>
		<label>Layout Versions:</label>
          <Query query={VERSIONS_QUERY} id="1">
			{
				({data: { project }}) => {
				  	return <Versions versions={project.version} />;
            	}}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;