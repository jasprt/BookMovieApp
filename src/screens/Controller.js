import React from 'react'
import { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import HomePage from './homepage/HomePage'
import MovieDetails from './moviepage/MovieDetails'

export default function Controller() {
    return (
        <Fragment>
            <Header />
            <Router>
                <div>
                    <Route exact path='/' render={(history, props) => <HomePage {...props} history={history} />} />
                    <Route exact path='/moviedetails/:id' render={(history, props) => <MovieDetails {...props} history={history} />} />
                </div>
            </Router>
        </Fragment>
    )
}