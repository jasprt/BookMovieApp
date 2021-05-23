import React from 'react'
import { Fragment } from 'react'
import { Route, Router } from 'react-router'
import Header from './Header'
import HomePage from './homepage/HomePage'

export default function Controller() {
    return (
        <React.StrictMode>
            <Fragment>
                <Header></Header>
                <HomePage></HomePage>
            </Fragment>
        </React.StrictMode>
    )
}