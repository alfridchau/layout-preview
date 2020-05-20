import React, { useState, useEffect} from "react";  
import Link from "next/link"
import LogoutButton from "../components/Logout";

const Nav = () => {

	let Logout = "";
	
	useEffect(() => {
		const token = localStorage.getItem('auth:token');
		
		
		
	});

  	return (
    	<div>
       		<div>
              	<nav className="uk-navbar-container">
                	<div className="uk-navbar-left">
                  		<ul className="uk-navbar-nav">
                    		<li>
                      			<Link href="/">
                        			<a>Layout Preview</a>
                      			</Link>
								{Logout}
                    		</li>
                  		</ul>
                	</div>
              	</nav>
            </div>
    	</div>
  	);
};

export default Nav;  