import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'     // need this to inject any received data into react
import Body from './modules/components/Body';

const client = new ApolloClient({                 // setup Apollo Client
  uri: 'http://localhost:4242/graphql'            // endpoint to make queries to
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Body />
      </ApolloProvider>
    );
  }
}

export default App;
