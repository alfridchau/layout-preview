import React from "react";

const Project = ({ name }) => { 
  	return name != null && (
		<React.Fragment>
			<h1>{name}</h1>
			<style jsx>{`
				h1 {
					line-height: 100%;
					margin-bottom: 20px;
				}
			`}</style>
		</React.Fragment>
  	);
};

export default Project;