import React from 'react'
import ActionButton from '../homepage/ActionButton';
import './Header.css'
import logo from '../../assets/logo.svg'
import { Button } from '@material-ui/core';


const Header = () => {
    return (
        <div className="header-bar">
            <div className="logo-gif">
                <img src={logo} alt="loading..." className='header-gif rotate' />
            </div>
            <div className="btn">
                {/* TODO Action Login Button */}
                <ActionButton></ActionButton>
            </div>
            <div className="btn" id="bookshow" >
                <Button variant="contained" color="primary" id="bookshowbtn" style={{ display: 'none' }}>Book Show</Button>
            </div>
        </div>
    )
}

export default Header;