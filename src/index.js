
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from "../src/redux/store";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <MoralisProvider appId="YAl8gRiBCbLfPVXnZQdOf43rSDDp6F1c4sAw86i8" serverUrl="https://69qz4nac7phj.usemoralis.com:2053/server">
      <Router>
    <App />
    </Router>
    </MoralisProvider>
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

