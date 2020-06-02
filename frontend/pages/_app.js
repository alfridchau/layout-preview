//Libraries
import React, {useState} from "react";  
import Head from "next/head";
import "reset-css";
import "../assets/css/style.css";
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";

//Context
//import UserContextProvider from '../contexts/userContext';

//Components
import Navbar from "../components/Navbar";  

const App = ({ Component, pageProps, apollo }) => {
  	return (
    	<ApolloProvider client={apollo}>
      		<Head>
        		<title>Mirum Layout Preview</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<link
          			rel="stylesheet"
          			href="https://fonts.googleapis.com/css?family=Staatliches"
				/>
      		</Head>
			<Navbar />
			<Component {...pageProps} />
			<style jsx global>{`
				html, body {
					width: 100%;
					height: 100%;
					font-family: Staatliches;
				}
				#__next {
					padding: 20px;
				}
			`}</style>
      		
    	</ApolloProvider>
  	)
};

// Wraps all components in the tree with the data provider
export default withData(App);