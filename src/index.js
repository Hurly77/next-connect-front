import React from 'react';
import {render} from 'react-snapshot'
import App from './App';
 
import { Provider } from 'react-redux';
import store from './Redux'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);