import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Friend.module.css'

const Friend = (props) => {
    return (
        <NavLink to={`/friends/${props.friend.id}`} className={c.item}>
            <img className={c.ava} src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png" alt="friend"/>
            <p className={c.name}>{props.friend.name}</p>
        </NavLink>
    )
}

export default Friend