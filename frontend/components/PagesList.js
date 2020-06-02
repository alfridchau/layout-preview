//Core
import React from "react";

//Component
import LayoutVersionList from "../components/LayoutVersionList";

const PagesList = ({ pages }) => {
	return pages != undefined && (
	  <div>
			<table>
				<style jsx>{`
					table {
						width: 100%;
						tr {
							th {
								text-align: left;
                                vertical-align: top;
								font-size: 20px;
								border-bottom: solid 1px #005377;
								padding: 20px 0;
							}
							td {
								width: 25%;
								text-align: left;
								vertical-align: top;
								font-size: 20px;
								border-bottom: solid 1px #212322;
								padding: 20px 0;
							}
						}
					}
				`}</style>
				<tbody>
                    <tr>
                        <th></th>
                        <th>Desktop</th>
                        <th>Tablet</th>
                        <th>Mobile</th>
                    </tr>
					{
							pages.map((page) => (
								<tr key={page.id}>
									<td>{page.name}</td>
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