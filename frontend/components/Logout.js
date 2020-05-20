

import React from "react";  
import Link from "next/link";
import { useRouter } from 'next/router';


const LogoutLink = React.forwardRef(({ onClick, href }, ref) => {
    onClick = () => {
        console.log('s');
        localStorage.clear();
    }
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Logout
      </a>
    )
  })


const LogoutButton = () => {
    

    
	
    
    return (
        <Link href="" passHref>
            <LogoutLink />
        </Link>
    );
  	
};

export default LogoutButton;