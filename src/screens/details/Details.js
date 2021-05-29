import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './Details.css'
import Header from '../commons/header/Header';
import { GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const MovieDetails = (props) => {
    const [getMovieDetails, setMovieDetails] = useState([]);
    const [genres, setgenres] = useState([]);
    const [artists, setArtists] = useState([]);
    const isAutoplay = 0;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const id = props.match.params.id;
            const uri = `/api/v1/movies/${id}`;
            const response = await fetch(uri);
            const result = await response.json();
            setMovieDetails(result);
            setgenres(result.genres);
            setArtists(result.artists);

            if (result.status === "RELEASED") {
                document.getElementById('bookshowbtn').style.display = "block";
            } else {
                document.getElementById('bookshowbtn').style.display = "none";
            }
        }
        fetchMovieDetails();
    }, []);

    const hideBookShow = () => {
        document.getElementById('bookshowbtn').style.display = "none";
    }

    const changeIconColoronCLick = (event) => {
        if (event.target.style.color === "yellow") {
            event.target.style.color = "";
        } else {
            event.target.style.color = "yellow";
        }
    }

    const backButton = "< Back to Home";
    return (
        <div>
            <Header {...props} />
            <Link to="/" >
                <button className="back-button" onClick={hideBookShow}> {backButton} </button>
            </Link>

            <div className="movie-detail-container" >
                <img className="movie-poster"
                    src={getMovieDetails.poster_url}
                    alt="...loading" />
                <div className="movie-detail-info">
                    <div>
                        <label><h3>{getMovieDetails.title}</h3></label>
                    </div>
                    <div>
                        <label>Genres: </label>{genres.toString()}
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
                        <iframe width="100%" height="280" src={`${getMovieDetails.trailer_url}?autoplay=${isAutoplay}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className="Rating-grid" style={{ position: "relative", textAlign: "center", width: "35%" }}>
                    
                    <Typography variant="h5" component="h1">
                        Rate this movie:
                    </Typography>

                    <Typography>
                        <StarBorderIcon cursor="pointer" onClick={changeIconColoronCLick}></StarBorderIcon>
                        <StarBorderIcon cursor="pointer" onClick={changeIconColoronCLick}></StarBorderIcon>
                        <StarBorderIcon cursor="pointer" onClick={changeIconColoronCLick}></StarBorderIcon>
                        <StarBorderIcon cursor="pointer" onClick={changeIconColoronCLick}></StarBorderIcon>
                        <StarBorderIcon cursor="pointer" onClick={changeIconColoronCLick}></StarBorderIcon>
                    </Typography>

                    <Typography variant="h6" component="h3" style={{ marginTop: "16px" }}>
                        Artists:
                    </Typography>

                    <GridList cols={2} style={{ width: "80%", justifyContent: "center", alignItems: "center", marginLeft: "16px" }}>
                        {!artists == "" && artists.map((a) =>
                        (
                            <GridListTile>
                                <img src={a.profile_url} alt={a.role_type} />
                                <GridListTileBar
                                    title={a.first_name + " " + a.last_name}
                                // subtitle={<span>Realease Date: {tile.release_date}</span>}
                                />
                            </GridListTile>
                        )
                        )}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;