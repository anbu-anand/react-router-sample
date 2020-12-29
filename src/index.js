import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from "./reducers";

import App from "./components/App";

const store = createStore(reducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
    
  </React.StrictMode>,
  rootElement
);
