//Core
import React from "react";
import { useRouter } from 'next/router';

const Versions_Select = ({ version, project_uid }) => {
	const router = useRouter();
	const setPath = (e) => {
		let index = e.target.selectedIndex;
		let el = e.target.childNodes[index];
		let version =  el.getAttribute('id');
		router.push("/project/"+project_uid+"/version/"+version);
	}
	return (
	  <div>
			<table>
				<tbody>
					{
						version.map((item) => (
							<React.Fragment key={item.id}>
								<tr>
									<td colSpan="3">
										{item.version_number}
									</td>
								</tr>
								<tr>
									<td>Desktop</td>
									<td>Tablet</td>
									<td>Mobile</td>
								</tr>
							</React.Fragment>
						))
					}
				</tbody>
			</table>
	  </div>
	);
};

export default Versions_Select;