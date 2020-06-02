//Libraries
import React from "react";  
import Head from "next/head";
import "reset-css";
import "../assets/css/style.css";
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";

//Context
//import UserContextProvider from '../contexts/userContext';

//Components
import Nav from "../components/nav";  

const App = ({ Component, pageProps, apollo }) => {

  	return (
    	<ApolloProvider client={apollo}>
      		<Head>
        		<title>Strapi blog</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<link
          			rel="stylesheet"
          			href="https://fonts.googleapis.com/css?family=Staatliches"
				/>
        		
        		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        		<script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      		</Head>
			<Nav />
			<Component {...pageProps} />
			<style jsx global>{`
				html, body {
					width: 100%;
					height: 100%;
				}
			`}</style>
      		
    	</ApolloProvider>
  	)
};

// Wraps all components in the tree with the data provider
export default withData(App);