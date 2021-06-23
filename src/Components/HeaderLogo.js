import React from 'react'
import logo from '../images/brilliant-logo.png'

function HeaderLogo() {
    return (
        <div className="header-logo">

            <a href="#" className="header-logo__link">
                <img src={logo} alt="logo" className="header-logo__img"/>
            </a>

            <h3 className="header-logo__name">
                <a href="#" className="header-logo__link logo__link--name">Brilliant</a>
            </h3>
            
        </div>
    )
}

export default HeaderLogo
