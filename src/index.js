import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const rerenderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={ store }/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderDOM();
  
store.subscribe(rerenderDOM);

window.store = store;

reportWebVitals();
