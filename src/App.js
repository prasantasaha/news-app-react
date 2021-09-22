import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import state from './state/index';

import './App.css';
import Layout from './containers/Layout';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(state);

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
