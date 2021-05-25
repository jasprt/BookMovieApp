import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { Button } from '@material-ui/core';
import ActionButton from '../homepage/ActionButton';
import { Link } from "react-router-dom";



const Header = (props) => {
    const movieId = `/${props.movieId}/bookshow`;
    const [bookshowstate, setbookshowstate] = useState(false);
    const bookshow = () => {
        const session = sessionStorage.getItem("loginuser");
        //SessionStorage is null if no key-value exists
        if (session == null) {
            //Open Modal from Header to Login/Register
        } else {
            //redirect to book show page
            setbookshowstate(true);
        }
    }

    

    return (
        <div className="header-bar">
            <div className="logo-gif">
                <img src={logo} alt="loading..." className='header-gif rotate' />
            </div>
            <div className="btn">
                <ActionButton></ActionButton>
            </div>
            <div className="btn" >
                <Link to={movieId}>
                    <Button variant="contained" color="primary" id="bookshowbtn" style={{ display: 'none' }} onClick={bookshow}>Book Show</Button>
                </Link>
            </div>
        </div >
    )
}

export default Header;