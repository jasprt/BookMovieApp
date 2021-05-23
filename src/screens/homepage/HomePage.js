import React from 'react'
import { Fragment } from 'react'
import DisplayUpcomingMovies from './DisplayUpcomingMovies'
import './HomePage.css'

export default function HomePage() {
    return(
        <Fragment>
            <div className="homepage-upcoming-title">Upcoming Movies</div>
            <DisplayUpcomingMovies />
        </Fragment>
    )
}