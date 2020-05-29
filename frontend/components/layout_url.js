import React from "react";

const LayoutURL = ({ layouts }) => { 
  	return (
            //<a href={layout.tc} target="_blank">{layout.caption}</a>
            <ul>
                {
                    layouts.map((layout) => (
                        <li key={layout.id}>
                            <a href={layout.url} target="_blank">{layout.caption}</a> <span className="width">(Width: {layout.width}px)</span>
                            <br/>
                            <style jsx>{`
                                span.width {
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