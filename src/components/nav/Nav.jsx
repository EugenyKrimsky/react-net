import React from 'react'
import '../../index.css'
import c from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import Friends from './friends/Friends'

const Nav = (props) => {
    return (
        <div className={c.sidebar}>
            <nav className={`${c.nav} section`}>
                <div className={c.item}>
                    <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to="/news" activeClassName={c.active}>News</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
                </div>
            </nav>
            <Friends data={props.state.friends}/>
        </div>
    )
}

export default Nav