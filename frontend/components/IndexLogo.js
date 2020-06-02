import React from "react";

const IndexLogo = ({logo, showStatus}) => {

  	return logo == undefined? null: showStatus == true? (
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
  	): null;
};

export default IndexLogo;