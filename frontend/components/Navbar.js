import React, { useState, useEffect} from "react";  
import Link from "next/link"
import { useRouter } from 'next/router';

const Navbar = () => {
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
    	<React.Fragment>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Layout Preview</a>
						</Link>
					</li>
					{isAuth == true? (
						<li>
							<a href="#" onClick={logout}>Logout</a>
						</li> 
					): null}
				</ul>
			</nav>
			<style jsx>{`
				nav {
					margin-bottom: 20px;
					padding-bottom: 20px;
					border-bottom: solid 1px #212322;
				}
				ul {
					display: flex;
					justify-content: space-between;
					padding-left: 0;
					li {
						list-style: none;
						a {
							color: #212322;
							&:hover {
								text-decoration: underline;
							}
						}
					}
				}
			`}</style>
    	</React.Fragment>
  	);
};

export default Navbar;  