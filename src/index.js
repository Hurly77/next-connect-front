import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
   domain={domain}
   clientId={clientId}
   redirectUri={window.location.origin}>
  <Provider store={store}> 
  </Provider>
     <App />
  </Auth0Provider>,
  document.getElementById('root')
);


