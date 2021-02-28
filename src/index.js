import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
