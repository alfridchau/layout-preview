import React, { useState, useEffect} from "react";
import { useRouter } from 'next/router';


const Versions_Select = ({ project_uid, versions }) => {
	const router = useRouter();
	const setPath = (e) => {
		let index = e.target.selectedIndex;
		let el = e.target.childNodes[index];
		let version =  el.getAttribute('id');
		router.push("/project/"+project_uid+"/version/"+version);
	}

	// States
	const [loading, setLoading] = React.useState(true);
	const [options, setOptions] = useState([]);
	const [value, setValue] = useState();

	// Effects
	useEffect(() => {
		let unmounted = false;
		async function getVersions() {
			let selectDefault = [{"id": "0", "default_value": "Please Select"}];
			if (!unmounted) {
				setOptions([...selectDefault, ...versions].map((item) => (
					{
						id: item.id,
						value: item.version_number || item.default_value
					}
				)));
			}
			setLoading(false);
		}
		getVersions();
		return () => {
			unmounted = true;
		};
	}, []);
	

  	return (
		<select disabled={loading} value={value} onChange={setPath}>
			{options.map(({ id, value }) => (
				<option id={value} key={id} value={value}>{value}</option>
			))}
		</select>
	);
};

export default Versions_Select;