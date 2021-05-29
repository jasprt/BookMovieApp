import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Modal from 'react-modal'
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './ActionButton.css'

Modal.setAppElement('#root')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <label p={3}>
                    <Typography>{children}</Typography>
                </label>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ActionButton = (props) => {
    const [model, setmodel] = useState(false);
    const [value, setValue] = useState(0);
    const [isLogin, setIsLogin] = useState("Login");
    const [form, setForm] = useState("Form-1");
    const [loginhidden, setloginhidden] = useState(() => {
        if (sessionStorage.getItem("loginuser") == null) {
            return false;
        } else
            return true;
    });

    const handleChange = (event, newValue) => {
        if (newValue === 1) {
            setIsLogin("Register");
            setForm("Form-2");
        } else {
            setIsLogin("Login");
            setForm("Form-1");
        }
        setValue(newValue);
    };

    const loginHandler = (e) => {
        e.preventDefault();
        const email = document.getElementsByName('username')[0].value;
        const password = document.getElementsByName('password')[0].value;
        let basicString = btoa(`${email}:${password}`);
        const uri = "/api/v1/auth/login";
        basicString = `Basic ${basicString}`;

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("authorization", basicString);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(uri, requestOptions)
            .then(response => response.text())
            .then(result => {
                sessionStorage.setItem("loginuser", result);
                alert("Login Sucessful");
                setloginhidden(true);
                // Auto close modal post successful login
                setmodel(false);
            })
            .catch(error => console.log('error', error));

    }

    const registerHandler = (e) => {
        e.preventDefault();
        const firstname = document.getElementsByName('firstname')[0].value;
        const lastname = document.getElementsByName('lastname')[0].value;
        const email = document.getElementsByName('email')[0].value;
        const pass = document.getElementsByName('registerpass')[0].value;
        const contact = document.getElementsByName('contact')[0].value;

        const uri = "/api/v1/signup";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json;charset=UTF-8");
        myHeaders.append("Accept", "application/json");

        var raw = `{"email_address": "${email}", 
            "first_name": "${firstname}", 
            "last_name": "${lastname}",  
            "mobile_number": "${contact}", 
            "password": "${pass}"}`;

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(uri, requestOptions)
            .then(response => response.text())
            .then(result => {
                // Store registered details in the session for future purposes
                sessionStorage.setItem("registereduser", result);
                document.getElementById("registersuccess").innerText = "Registration Successful. Please Login!";
                // Auto close modal in 3 seconds post successful registeration
                setTimeout(() => {
                    setmodel(false);
                }, 3000)
            })
            .catch(error => console.log('error', error));
    }

    const removeSession = () => {
        sessionStorage.removeItem("loginuser");
        setloginhidden(false);
        alert('Successfully Loggedout!');
    }

    const bookshowhandler = () => {
        if (sessionStorage.getItem("loginuser") == null) {
            setmodel(true);
        } else {
            props.history.push(`/${props.match.params.id}/bookshow`);
        }

    }

    return (
        <div className="buttons">
            {/* <Link to={movieId}> */}
            <Button variant="contained" color="primary" id="bookshowbtn" style={{ display: 'none' }} onClick={bookshowhandler}>Book Show</Button>
            {/* </Link> */}
            {/* TODO - Implement Login/Register Tab using Tabs and Modals */}
            {!loginhidden && <Button id="actionButton" variant="contained" color="default" onClick={() => setmodel(true)}>Login</Button>}
            {loginhidden && <Button id="logoutButton" variant="contained" color="default" className="action-btn" onClick={removeSession}>Logout</Button>}
            <Modal style={customStyles} isOpen={model} onRequestClose={() => setmodel(false)}>
                <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
                    <Tab label="Login" {...a11yProps(0)}></Tab>
                    <Tab label="Register" {...a11yProps(1)}></Tab>
                </Tabs>
                <form className="login-form" id="Form-1" onSubmit={loginHandler}>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    <TabPanel value={value} index={0}>
                        <Input type="text" placeholder="UserName *" required name="username"></Input>
                    </TabPanel>
                        &nbsp;&nbsp;&nbsp;
                        <TabPanel value={value} index={0} >
                        <Input type="password" placeholder="Password *" required name="password"></Input>
                    </TabPanel>
                </form>
                <form className="login-form" id="Form-2" onSubmit={registerHandler}>
                    &nbsp;&nbsp;&nbsp;
                    <TabPanel value={value} index={1}>
                        <Input type="text" required placeholder="First Name *" name="firstname"></Input>
                    </TabPanel>
                    &nbsp;&nbsp;&nbsp;
                    <TabPanel value={value} index={1}>
                        <Input type="text" required placeholder="Last Name *" name="lastname"></Input>
                    </TabPanel>
                    &nbsp;&nbsp;&nbsp;
                    <TabPanel value={value} index={1}>
                        <Input type="email" required placeholder="Email *" name="email"></Input>
                    </TabPanel>
                        &nbsp;&nbsp;&nbsp;
                    <TabPanel value={value} index={1}>
                        <Input type="password" required placeholder="Password *" name="registerpass"></Input>
                    </TabPanel>
                    &nbsp;&nbsp;&nbsp;
                    <TabPanel value={value} index={1}>
                        <Input type="number" required placeholder="Contact *" name="contact" title="Enter 10 digit number"></Input>
                    </TabPanel>
                    &nbsp;&nbsp;
                    <TabPanel value={value} index={1}>
                        <p id="registersuccess"></p>
                    </TabPanel>
                    {/* <Button type="submit"> Register </Button> */}
                </form>
                &nbsp;&nbsp;&nbsp;
                <div className="btn-class">
                    <Button type="submit" id="login-button" form={form} className="actionButton" variant="contained" color="primary">{isLogin}</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button className="actionButton" variant="contained" color="secondary" onClick={() => setmodel(false)}>Close</Button>
                </div>
            </Modal>

        </div>

    )
}

export default ActionButton;