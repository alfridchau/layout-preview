import { ApolloClient } from "apollo-client";  
import withApollo from "next-with-apollo";  
import { createHttpLink } from "apollo-link-http";  
import { setContext } from 'apollo-link-context';
import fetch from "isomorphic-unfetch";
import { InMemoryCache } from "apollo-cache-inmemory";


// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.API_URL || "http://localhost:1337";

const httpLink = createHttpLink({  
  	fetch, // Switches between unfetch & node-fetch for client & server.
  	uri: GRAPHQL_URL + "/graphql"
});

const authLink = setContext((_, { headers, ...context }) => {
  	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('auth:token');
  	// return the headers to the context so httpLink can read them
  	return {
		headers: {
			...headers,
			...(token ? {Authorization: `Bearer ${token}`} : {}),
		},
		...context,
  	}
});


// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(  
  	// You can get headers and ctx (context) from the callback params
  	// e.g. ({ headers, ctx, initialState })
  	({ initialState }) =>
	new ApolloClient({
		link: authLink.concat(httpLink),
		//link: httpLink,
		cache: new InMemoryCache()
		//  rehydrate the cache using the initial data passed from the server:
		.restore(initialState || {})
	})
);