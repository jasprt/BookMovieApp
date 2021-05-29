import React from 'react'
import './Header.css'
import logo from '../../../assets/logo.svg'
import ActionButton from '../../home/ActionButton';


const Header = (props) => {

    return (
        <div className="header-bar">
            <img src={logo} alt="loading..." className='header-gif rotate logo-gif' />
            <ActionButton {...props}></ActionButton>
        </div >
    )
}

export default Header;