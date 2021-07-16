import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import storeConfig from './store.js';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// To use stripe
const stripePromise = loadStripe('pk_test_51JCRNLFDCbU0H1ns7CpYSMEAYlRm45RB3KWkN7oPBGdfwqfcPoAnRNQxtxyyY3WBeHO0NwWB5aCVcU9uSuXFeKqs00alf7pq0J');

// To use redux
const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Elements stripe={stripePromise}>
          <App></App>
        </Elements>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
