import React from "react";

const LayoutURL = ({ layouts }) => { 
  	return (
            //<a href={layout.tc} target="_blank">{layout.caption}</a>
            <ul>
                {
                    layouts.map((layout) => (
                        <li key={layout.id}>
                            <a href={layout.url} target="_blank">{layout.caption}</a>
                            <br/>
                            <span className="filename">Filename: {layout.name}</span>
                            <style jsx>{`
                                .filename {
                                    font-size: 12px;
                                }
                            `}</style>
                        </li>
                    ))
                }
            </ul>
  	);
};

export default LayoutURL;