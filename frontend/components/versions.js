import React from "react";
import { useRouter } from 'next/router';  

const Versions = ({ versions }) => { 
	const router = useRouter();
	const handleChange = e => {
		let index = e.target.selectedIndex;
		let el = e.target.childNodes[index];
		let option =  el.getAttribute('id');
		router.push("/project/"+option);
	};
  	return (
    		<select onChange={handleChange}>
			{versions.map((version, i) => {
            		return <option id={version.id} value={version.version_number} key={version.id}>{version.version_number}</option>;
          	})}
    		</select>
  	);
};

export default Versions;