import React from 'react'
import c from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={c.item} activeClassName={c.active}>
            <img src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png" alt="user" className={c.friend}/>
            <span>{props.name}</span>
        </NavLink>
    )
} 

export default Dialog