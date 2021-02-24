import React from 'react'
import '../../index.css'
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={`${c.header} section`}>
            <div className={c.logotext}>
                <div className={c.logo}></div>
                <h1>Topnet</h1>
            </div>
        </header>)
}

export default Header