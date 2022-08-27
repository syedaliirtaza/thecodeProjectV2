
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
      <MoralisProvider appId="K3x40TrtxERPo4ia6t0EX9I43yo8bHX9N4tFkEVF" serverUrl="https://gouypqtfamdb.usemoralis.com:2053/server">
      <Router>
    <App />
    </Router>
    </MoralisProvider>
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

