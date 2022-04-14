import React from 'react';
import ReactDOM from 'react-dom';
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// client sdk key
(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '6225a8c0ef445314cbf887d9',
  });

ReactDOM.render(
  <LDProvider>
    <App />
  </LDProvider>,

  document.getElementById('root')
);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
