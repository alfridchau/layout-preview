//Core
import React from "react";

//Component
import LayoutVersionList from "../components/LayoutVersionList";

const PagesList = ({ pages }) => {

	return (
	  <div>
			<table>
				<style jsx>{`
					table {
						width: 100%;
						tr {
							th {
								text-align: left;
                                vertical-align: top;
							}
							td {
								width: 25%;
								text-align: left;
								vertical-align: top;
							}
						}
					}
				`}</style>
				<tbody>
                    <tr>
                        <td></td>
                        <th>Desktop</th>
                        <th>Tablet</th>
                        <th>Mobile</th>
                    </tr>
					{
						pages.map((page) => (
								<tr key={page.id}>
									<th>{page.name}</th>
                                    <td><LayoutVersionList layouts={page.desktop} /></td>
                                    <td><LayoutVersionList layouts={page.tablet} /></td>
                                    <td><LayoutVersionList layouts={page.mobile} /></td>
								</tr>
						))
					}
				</tbody>
			</table>
	  </div>
	);
};

export default PagesList;