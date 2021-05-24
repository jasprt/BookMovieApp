import { Button, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')
const ActionButton = () => {

    const [model, setmodel] = useState(true);

        return (
            <div>
                {/* TODO - Implement Login/Register Tab using Tabs and Modals */}
                <Button id="actionButton" variant="contained" color="default" className="action-btn" onClick={() => setmodel(true)}>Login</Button>
                <Modal isOpen={model} onRequestClose={() => setmodel(false)}>
                    <Tabs selectionfollowsfocus centered textColor="primary" variant="fullWidth" width="100px">
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    <Button id="actionButton" variant="contained" color="primary" onClick={() => setmodel(false)}>Close</Button>
                </Modal>
            </div>
        )
    }

    export default ActionButton;