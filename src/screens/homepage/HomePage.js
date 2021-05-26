import React from 'react'
import { Fragment } from 'react'
import Header from '../commons/Header'
import DisplayReleasedMovies from '../moviesdisplay/DisplayReleasedMovies'
import DisplayUpcomingMovies from '../moviesdisplay/DisplayUpcomingMovies'
import './HomePage.css'

export default function HomePage(props) {

    return (
        <Fragment>
            <Header {...props}/>
            <div className="homepage-upcoming-title">Upcoming Movies</div>
            <DisplayUpcomingMovies />
            <DisplayReleasedMovies />
        </Fragment>
    )
}