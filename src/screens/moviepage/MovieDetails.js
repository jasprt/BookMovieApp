import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './MovieDetails.css'

const MovieDetails = (props) => {
    console.log("props", props);
    const [getMovieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const id = props.history.match.params.id;
            const uri = `/api/v1/movies/${id}`;
            const response = await fetch(uri);
            const result = await response.json();
            setMovieDetails(result);
        }
        fetchMovieDetails();

        if (props.history.match.params.released === "released") {
            document.getElementById('bookshowbtn').style.display = "block";
        } else {
            document.getElementById('bookshowbtn').style.display = "none";
        }

    }, []);

    const hideBookShow = () => {
        console.log("Removing bookshow button", document.getElementById('bookshowbtn'));
        document.getElementById('bookshowbtn').style.display = "none";
    }

    const backButton = "< Back to Home";
    return (
        <div>
            <div>
                <Link to="/" >
                    <button className="back-button" onClick={hideBookShow}> {backButton} </button>
                </Link>
            </div>
            <div className="movie-detail-container" >
                <img className="movie-poster"
                    src={getMovieDetails.poster_url}
                    alt="...loading" />
                <div className="movie-detail-info">
                    <div>
                        <label><h3>{getMovieDetails.title}</h3></label>
                    </div>
                    <div>
                        <label>Genres: </label>{getMovieDetails.genres}
                    </div>
                    <div>
                        <label>Duration: </label>{getMovieDetails.duration}
                    </div>
                    <div>
                        <label>Release Date: </label>{getMovieDetails.release_date}
                    </div>
                    <div>
                        <label>Rating: </label>{getMovieDetails.rating}
                    </div>
                    <br />
                    <div>
                        <label>Plot: <a href={getMovieDetails.wiki_url} target="_blank">Wiki Link </a>
                        </label>
                        <span>{getMovieDetails.storyline}</span>
                    </div>
                    <br />
                    <div>
                        <label>Trailer:</label>
                    </div>
                    <div>
                        {/* TODO Update URL of each movie in IntelliJ and reload DB data */}
                        <iframe width="800" height="280" src={`${getMovieDetails.trailer_url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;