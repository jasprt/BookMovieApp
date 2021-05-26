import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import ActionButton from '../homepage/ActionButton';


const Header = (props) => {

    return (
        <div className="header-bar">
            <img className="logo-gif" src={logo} alt="loading..." className='header-gif rotate' />
            <ActionButton {...props}></ActionButton>
        </div >
    )
}

export default Header;