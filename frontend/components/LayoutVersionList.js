//Core
import React, { useState } from "react";

//Components
//import LayoutURL from "../components/layout_url";

const LayoutVersionList = ({ layouts }) => {
	console.log(layouts)
	let latestVersion = "";
	if (layouts == null) {
		return <div>N/A</div>;
	} else {
		latestVersion = layouts.version[layouts.version.length - 1];
		
	}
	return (
		<React.Fragment>
				<p className="version">Latest Version:</p>
				<a href={latestVersion.image.url} target="_blank" className="version">{latestVersion.version_number}</a>
				{ layouts.version.length > 1 &&
					<React.Fragment>
						<p className="version">Previous Version:</p>
						<ul>
							<li></li>
						</ul>
					</React.Fragment>
				}
				
				
				<style jsx>{`
					.version {
						font-size: 14px;
						color: #CCC;
					}
					p.version {
						margin-bottom: 0
					}
				`}</style>
		</React.Fragment>
	);
};

export default LayoutVersionList;