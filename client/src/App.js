import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NodePage from './pages/NodePage';
import UnitTest from './pages/UnitTest';
import JavaScriptPage from './pages/JavaScript';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/NodeJS"
              element={<NodePage />}
            />
            <Route
              path="/TDD"
              element={<UnitTest />}
            />
            <Route
              path="/javascript"
              element={<JavaScriptPage />}
            />
          </Routes>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;