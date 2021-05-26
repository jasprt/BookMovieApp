import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayUpcomingMovies.css';

export default function DisplayUpcomingMovies() {
    const [getMovieList, setMovieList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const uri = "/api/v1/movies?page=1&limit=10&status=PUBLISHED";
            const response = await fetch(uri);
            const result = await response.json();
            setMovieList(result.movies);
        }
        fetchApi();
    }, []);

    return (
        <div id="upcoming-movie-listing" className='movie-listing-container'>
            {getMovieList.map(element => {
                return (
                    <div key={element.id}>
                        <Link to={`/movie/${element.id}`}>
                            <img id={element.id} src={element.poster_url} alt="...loading" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}