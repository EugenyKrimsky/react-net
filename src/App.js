import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import Header from './components/header/Header'
import SideBar from './components/side_bar/SideBar'
import Profile from './components/profile/Profile'
import Dialogs from './components/messages/Dialogs'
import News from './components/news/News'
import Music from './components/music/Music'
import Settings from './components/settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <SideBar state={props.state.sideBar}/>
        <div className="wrapper">
          <Route path="/messages" render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
          <Route path="/profile" render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
          <Route path="/news"component={News}/>
          <Route path="/music"component={Music}/>
          <Route path="/settings"component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
