import React from "react";

const PrototypeURL = ({ type, url }) => { 
  	return url != null && (
		<React.Fragment>
			<a href={url} target="_blank">{type} fullversion prototype</a>
			<style jsx>{`
				a {
					color: #005377;
					display: block;
					margin-bottom: 10px;
					&:hover {
						text-decoration: underline;
					}
				}
			`}</style>
		</React.Fragment>
  	);
};

export default PrototypeURL;