import React from 'react'
import ActionButton from './homepage/ActionButton';
import './Header.css'
import logo from '../assets/film-dark.gif'

const Header = () => {
    return (
        <div className="header-bar">
            <div>
                <img src={logo} alt="loading..." className='header-gif' />
            </div>
            <div>
                <ActionButton login="LOGIN" logout="LOGOUT"></ActionButton>
            </div>
        </div>
    )
}

export default Header;