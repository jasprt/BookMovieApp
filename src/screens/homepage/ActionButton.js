import React from 'react';
import './ActionButton.css'

const ActionButton = (props) => {

    return (
        <button id="loginButton" className="action-btn">{props.login}</button>
    )
}

export default ActionButton;