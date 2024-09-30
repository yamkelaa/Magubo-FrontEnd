import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import 'bear-react-carousel/dist/index.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { store } from './store.js';
import { Provider } from 'react-redux';
const theme = createTheme({
  /** Put your mantine theme override here */
   fontFamily: 'Montserrat, sans-serif',
   defaultRadius: 'md',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
    </Provider>
);


