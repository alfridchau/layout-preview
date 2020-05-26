import React, { useState, useEffect} from "react";  
import Link from "next/link"
import { useRouter } from 'next/router';

const Nav = () => {
	const router = useRouter();
	let Logout = "";
	const [isAuth, setIsAuth] = useState(false);
	
	useEffect(() => {
		if (localStorage.getItem("auth:token")) {
			setIsAuth(true)
		}
	});

	const logout = () => {
		localStorage.clear();
		setIsAuth(false)
		router.push("/");
	}

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
								{isAuth == true? (
									<div onClick={logout}>Logut</div>
								): null}
                    		</li>
                  		</ul>
                	</div>
              	</nav>
            </div>
    	</div>
  	);
};

export default Nav;  