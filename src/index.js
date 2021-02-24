import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 0, likesCount: 12, text: 'why dora doesn\'t love me'},
  {id: 0, likesCount: 16, text: 'why avril lavigne doesn\'t love me'},
  {id: 0, likesCount: 19, text: 'why helly williams doesn\'t love me'},
  {id: 0, likesCount: 22, text: 'why helly williams doesn\'t love me'},
]

const messages = [
  {id: 1, message: 'Dima'},
  {id: 2, message: 'Andrew'},
  {id: 3, message: 'Sveta'},  
  {id: 4, message: 'Sasha'},
  {id: 5, message: 'Victor'},
  {id: 6, message: 'Valera'},
]

const dialogs = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Valera'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
