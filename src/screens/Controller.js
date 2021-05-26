import React from 'react'
import { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './homepage/HomePage'
import MovieDetails from './moviepage/MovieDetails'
import BookShow from './bookshow/BookShow'

export default function Controller() {
    const baseURL = "/api/v1/";
    return (
        <Fragment>
            <Router>
                <div>
                    <Route exact path='/' render={(props) => <HomePage {...props} />} />
                    <Route exact path='/movie/:id' render={(props) => <MovieDetails {...props} />} />
                    <Route exact path='/:id/bookshow' render={(props) => <BookShow {...props} baseUrl={baseURL} />} />
                </div>
            </Router>
        </Fragment>
    )
}