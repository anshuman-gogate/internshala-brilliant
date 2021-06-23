import React from 'react'
import HeaderLogo from './HeaderLogo'
import Nav from './Nav'
import LogSin from './LogSin'

function Header(props) {
    return (
        <header className="header">
            <div className="header-inner-container">
                <HeaderLogo />
                <Nav />
                <LogSin handleModal={props.handleModal}/>
            </div>
        </header>
    )
}

export default Header
