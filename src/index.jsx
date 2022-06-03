// Import modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

// Local modules
import { App } from './App'
import './index.css';

// Import Store
import { store } from './store/store';

// Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);
