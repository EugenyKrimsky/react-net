import React from 'react'
import c from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={c.item} activeClassName={c.active}>{props.name}</NavLink>
    )
} 

export default Dialog