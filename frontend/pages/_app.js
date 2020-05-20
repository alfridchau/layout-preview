import React, {useState, useEffect,} from "react";  
import Head from "next/head";  
import "../assets/css/style.css";
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";
import Nav from "../components/nav";  
import { useRouter } from 'next/router';

import UserContextProvider from '../contexts/userContext';



const App = ({ Component, pageProps, apollo }) => {  

	// const router = useRouter();
	
  	// useEffect(() => {
	// 	const token = localStorage.getItem('auth:token');
	// 	if (token) {
	// 		router.push("/project");
	// 	} else {
	// 		router.push("/");
	// 	}
	// },[]);
  	return (
    	<ApolloProvider client={apollo}>
      		<Head>
        		<title>Strapi blog</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<link
          			rel="stylesheet"
          			href="https://fonts.googleapis.com/css?family=Staatliches"
				/>
        		<link
          			rel="stylesheet"
          			href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        		/>
        		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        		<script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      		</Head>
			<UserContextProvider>
				<Nav />
				<Component {...pageProps} />
			</UserContextProvider>
      		
    	</ApolloProvider>
  	)
};

// Wraps all components in the tree with the data provider
export default withData(App);