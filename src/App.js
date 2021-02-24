import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import News from './components/news/News'
import Music from './components/music/Music'
import Settings from './components/settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Nav />
        <div className="wrapper">
          <Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
          <Route path="/profile" render={ () => <Profile posts={props.posts}/>}/>
          <Route path="/news"component={News}/>
          <Route path="/music"component={Music}/>
          <Route path="/settings"component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
