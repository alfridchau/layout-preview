import React, { useState, useEffect} from "react";
import Query from "../components/query"; 
import { useRouter } from 'next/router';

import VERSIONS_QUERY from "../apollo/queries/version/versions";
{/* <Query query={VERSIONS_QUERY} id="1">
	{({data: { project }}) => {
		return <Versions_Select versions={project.version} />;
	}}
</Query> */}
const Versions_Select = ({ project, versions }) => { 
	const router = useRouter();

	console.log(project)
	const setPath = (e) => {
		let index = e.target.selectedIndex;
		let el = e.target.childNodes[index];
		let version =  el.getAttribute('id');
		router.push("/project/"+version);
	}

	// States
	const [loading, setLoading] = React.useState(true);
	const [options, setOptions] = useState([]);
	const [value, setValue] = useState();

	// Effects
	// useEffect(() => {
	// 	let unmounted = false;
	// 	async function getVersions() {
	// 		let selectDefault = [{"id": "0", "default_value": "Please Select"}];
	// 		if (!unmounted) {
	// 			setOptions([...selectDefault, ...versions].map((item) => (
	// 				{
	// 					id: item.id,
	// 					value: item.version_number || item.default_value
	// 				}
	// 			)));
	// 		}
	// 		setLoading(false);
			
			
	// 	}
	// 	getVersions();
	// 	return () => {
	// 		unmounted = true;
	// 	};
	// }, []);
	

  	return (
		<select value={value} onChange={setPath}>
		{/* <select disabled={loading} value={value} onChange={setPath}> */}
			{options.map(({ id, value }) => (
				<option id={id} key={id} value={value}>{value}</option>
			))}
		</select>
	);
};

export default Versions_Select;