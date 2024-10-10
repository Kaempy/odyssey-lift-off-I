import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** importing our pages */
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Tracks from './tracks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
export default function Pages() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<Tracks />} path="/" />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
