import React from 'react'
import '../../index.css'
import c from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './friends/Friends'
import Nav from './nav/Nav'

const SideBar = (props) => {
    return (
        <div className={`${c.sidebar} section`}>
            <Nav data={props.state.links} />
            <Friends data={props.state.friends} />
        </div>
    )
}

export default SideBar