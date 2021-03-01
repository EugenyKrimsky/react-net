import React from 'react'
import c from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {
    const links = props.data.map(el => 
        <div className={c.item}>
            <NavLink to={`/${el.name}`} className={c.item} activeClassName={c.active}>{el.name[0].toUpperCase() + el.name.slice(1)}</NavLink>
        </div>)

    return (
        <nav className={c.nav}>
            {links}
        </nav>
    )
}

export default Nav