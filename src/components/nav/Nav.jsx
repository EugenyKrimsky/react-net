import React from 'react'
import '../../index.css'
import c from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={`${c.nav} section`}>
            <div className={c.item}>
                <a href="#">Profile</a>
            </div>
            <div className={c.item}>
                <a href="#">Messeges</a>
            </div>
            <div className={c.item}>
                <a href="#">News</a>
            </div>
            <div className={c.item}>
                <a href="#">Music</a>
            </div>
        </nav>
    )
}

export default Nav