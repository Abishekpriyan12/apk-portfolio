import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.js';

import { BrowserRouter } from 'react-router-dom'; // ✅ ADD THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter> {/* ✅ WRAP App WITH THIS */}
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
