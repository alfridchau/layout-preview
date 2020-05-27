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

	const logout = (e) => {
		e.preventDefault();
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
						  	<style jsx>{`
								.uk-navbar-nav {
									width: 100%;
									justify-content: space-between;
								}
							`}</style>
                    		<li>
                      			<Link href="/">
                        			<a>Layout Preview</a>
                      			</Link>
                    		</li>
							{isAuth == true? (
								<li>
									<a href="#" onClick={logout}>Logut</a>
								</li> 
							): null}
                  		</ul>
                	</div>
              	</nav>
            </div>
    	</div>
  	);
};

export default Nav;  