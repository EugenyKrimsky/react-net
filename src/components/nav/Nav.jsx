import React from 'react'
import '../../index.css'
import c from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
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
    )
}

export default Nav