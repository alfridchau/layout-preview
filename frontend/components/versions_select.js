//Core
import React, { useState, useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

//Queries
import VERSIONS_QUERY from "../apollo/queries/version/versions";

const Versions_Select = ({ project_uid }) => {
	const router = useRouter();
	const setPath = (e) => {
		let index = e.target.selectedIndex;
		let el = e.target.childNodes[index];
		let version =  el.getAttribute('id');
		router.push("/project/"+project_uid+"/version/"+version);
	}

	const { data: data, loading: loading, error: error } = useQuery(VERSIONS_QUERY, {
		variables: { uid: project_uid },
	});
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
	  console.error(JSON.stringify(error));
	  return <div>Error!</div>;
	}
	let versions = data.myProject.version;
	

	return (
	  <div>
			<table>
				<tbody>
					{
						versions.map((version) => (
							<tr key={version.id}>
								<td colSpan="3">
									{version.version_number}
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		
	  </div>
	);
};

export default Versions_Select;

// <select disabled={loading} value={value} onChange={setPath}>
			// 	{options.map(({ id, value }) => (
			// 		<option id={value} key={id} value={value}>{value}</option>
			// 	))}
			// </select>