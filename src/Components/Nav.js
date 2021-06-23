import React from 'react'

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item"><a href="#" className="nav__link">today</a></li>
                <li className="nav-list__item"><a href="#" className="nav__link active">courses</a></li>
                <li className="nav-list__item"><a href="#" className="nav__link">practice</a></li>
            </ul>
        </nav>
    )
}

export default Nav
