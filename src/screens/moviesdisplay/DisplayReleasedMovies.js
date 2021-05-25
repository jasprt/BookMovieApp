import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayReleasedMovies.css';

export default function DisplayReleasedMovies() {
    const [getMovieList, setMovieList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const uri = "/api/v1/movies?page=1&limit=10&status=RELEASED";
            const response = await fetch(uri);
            const result = await response.json();
            setMovieList(result.movies);
        }
        fetchApi();
    }, []);

    

    return (
        <div id="released-movie-listing" className='released-movie-listing-container'>
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