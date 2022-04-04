import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient, JitsuProvider } from "@jitsu/react";

const jitsuClient = createClient({
  tracking_host: "http://localhost:8001/",
  key: "js.bqexj4t3vs7i4q7q1j3358.ixbyul0pyd5crmdftlif7"
});

ReactDOM.render(
  <React.StrictMode>
    <JitsuProvider client={jitsuClient}>
      <App />
    </JitsuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
