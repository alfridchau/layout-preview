//Core
import React, { useState, useEffect } from "react";

//Components
//import LayoutURL from "../components/layout_url";

const LayoutVersionList = ({ layouts }) => {
	let latestVersion = "";
	let prevVersion = [];
	if (layouts == null) {
		return <div>N/A</div>;
	} else {
		latestVersion = layouts.version[layouts.version.length - 1];
		if (layouts.version.length > 1) {
			prevVersion = layouts.version;
			prevVersion.pop();
		}
	}
	return (
		<React.Fragment>
			<p className="version"><a href={latestVersion.image.url} target="_blank" className="version">{latestVersion.version_number}</a></p>
			{ prevVersion.length > 0 &&
				<React.Fragment>
					<p className="prevVersion">Previous Version:</p>
					<ul className="prevVersion">
						{
							prevVersion.map((version) => {
								return <li key={version.id}><a href={version.image.url} target="_blank" className="prevVersion">{version.version_number}</a></li>
							})
						}
						
					</ul>
				</React.Fragment>
			}
			
			
			<style jsx>{`
				a {
					&:hover {
						text-decoration: underline;
					}
				}
				.version {
					font-size: 18px;
					color: #005377;
				}
				p.version {
					margin-bottom: 0;
				}
				.prevVersion {
					font-size: 15px;
					color: #aaaaaa;
				}
				p.prevVersion {
					margin-top: 20px;
				}
				ul.prevVersion {
					margin-top: 10px;
				}
			`}</style>
		</React.Fragment>
	);
};

export default LayoutVersionList;