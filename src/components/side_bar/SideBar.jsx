import React from 'react'
import '../../index.css'
import c from './SideBar.module.css'
import Friends from './friends/Friends'
import Nav from './nav/Nav'

const SideBar = (props) => {
    return (
        <div className={`${c.sidebar} section`}>
            <Nav data={props.sidebar.links} />
            <Friends data={props.sidebar.friends} />
        </div>
    )
}

export default SideBar