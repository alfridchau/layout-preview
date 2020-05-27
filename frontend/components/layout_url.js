import React from "react";

const LayoutURL = ({ layout }) => { 
  	return (
    		<a href={layout.tc} target="_blank">{layout.caption}</a>
  	);
};

export default LayoutURL;