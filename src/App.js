import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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
        <SideBar sidebar={ props.store.getState().sideBar } />
        <div className="wrapper">
          <Route path="/messages" render={ () => <Dialogs 
                                                  dialogsPage={ props.store.getState().dialogsPage } 
                                                  dispatch={props.store.dispatch.bind(props.store)} />}/>
          <Route path="/profile" render={ () => <Profile 
                                                  profilePage={props.store.getState().profilePage} 
                                                  dispatch={props.store.dispatch.bind(props.store)} />}/>
          <Route path="/news"component={News} />
          <Route path="/music"component={Music} />
          <Route path="/settings"component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
