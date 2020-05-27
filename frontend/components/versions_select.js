//Core
import React from "react";
import { useRouter } from 'next/router';

//Component
import PrototypeURL from "../components/prototype_url";

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
				<style jsx>{`
					table {
						width: 100%;
						tr {
							th {
								text-align: left;
							}
							td {
								width: 33%;
								text-align: center;
								vertical-align: top;
							}
						}
					}
				`}</style>
				<tbody>
					{
						version.map((item) => (
							<React.Fragment key={item.id}>
								<tr>
									<th colSpan="3">
										Version {item.version_number}:
									</th>
								</tr>
								<tr>
									<td>
										Desktop
										{
											item.desktop_layout != null && item.desktop_layout.prototype_url != null &&
												<React.Fragment>
													<br/>
													<PrototypeURL url={item.desktop_layout.prototype_url} />
												</React.Fragment>
										}
									</td>
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