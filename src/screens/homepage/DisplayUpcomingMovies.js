import React from 'react';
import './DisplayUpcomingMovies.css';

export default function DisplayUpcomingMovies() {

    const fetchUpcomingMovies = () => {
        const uri = "/api/v1/movies?page=1&limit=10&status=PUBLISHED";
        fetch(uri)
            .then(rawResponse => rawResponse.json())
            .then(data => {
                let id = 0;
                data.movies.forEach(element => {
                    id = id + 1;
                    const template = `
                    <img id=${element.id} src=${element.poster_url} alt="...loading" />
                    `
                    const divElement = document.createElement('div');
                    divElement.innerHTML = template;
                    document.getElementById('upcoming-movie-listing').appendChild(divElement);
                });
            })
    }

    return (
        <div id="upcoming-movie-listing" className='movie-listing-container'>
            { fetchUpcomingMovies()}
        </div>
    )
}