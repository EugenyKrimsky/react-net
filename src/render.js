import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, upgradeNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export const rerenderDOM = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={props} addPost={addPost} upgradeNewPostText={upgradeNewPostText}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}