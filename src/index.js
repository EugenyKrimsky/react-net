import reportWebVitals from './reportWebVitals';
import state, {getRenderFunction} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, upgradeNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export const rerenderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} upgradeNewPostText={upgradeNewPostText}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
  
rerenderDOM();

getRenderFunction(rerenderDOM);

reportWebVitals();
