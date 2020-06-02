import React from "react";

const IndexLogo = ({logo, showStatus}) => {

    if (logo == undefined) {
        return null;
    }
    if (showStatus == false) {
        return null;
    }

  	return (
        <React.Fragment>
            <div>
                <img src={logo} />
            </div>
            <style jsx>{`
                div {
                    text-align: center;
                    
                }
            `}</style>
        </React.Fragment>
  	);
};

export default IndexLogo;