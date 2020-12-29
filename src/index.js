import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from "./reducers";

import App from "./components/App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
    
  </React.StrictMode>,
  rootElement
);
