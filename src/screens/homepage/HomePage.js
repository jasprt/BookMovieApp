import React, { useEffect, useState } from 'react';
import { Fragment } from 'react'
import Header from '../commons/Header'
import DisplayReleasedMovies from '../moviesdisplay/DisplayReleasedMovies'
import DisplayUpcomingMovies from '../moviesdisplay/DisplayUpcomingMovies'
import './HomePage.css'
import { Input, Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function HomePage(props) {
    const artists = ["Ranbir Kapoor", "Manisha Koirala", "Rajkumar Hirani", "Marlon Brando", "Leonardo DiCaprio", "Joseph Gordon-Levitt", "Matthew McConaughey", "Anne Hathaway", "Rajkummar Rao", "Kay Kay Menon", "Anthony LaPaglia", "Tom Hardy", "Al Pacino", "Christian Bale", "Heath Ledger", "Peter Berg", "Mark Wahlberg", "John Malkovich", "Robert De Niro", "Joe Pesci"];
    const genres = ["Drama", "Romance", "Horror", "Action", "Crime", "Thriller", "Political", "Social", "Fantasy", "Suspense", "Adventure", "Comedy", "Scifi", "Historical"];
    const [genreselect, setgenreselect] = useState('');
    const [artistselect, setartistselect] = useState('');

    const moviehandleChange = (event) => {
        const movielist = getReleasedMovieList.filter((element) => {
            return element.title.toLowerCase().startsWith(event.target.value.toLowerCase());
        });
        setReleasedMovieList(movielist);
    };

    const [reload, setReload] = useState(false);
    function reloadMovieList(e) {
        if (e.key === "Backspace") setReload(true);
        else setReload(false);
    }

    const artisthandleChange = (event) => {
        setartistselect(event.target.value);
    }

    const genreshandleChange = (event) => {
        setgenreselect(event.target.value);
    };

    const [getReleasedMovieList, setReleasedMovieList] = useState([]);
    const [getUpcomingMovieList, setUpcomingMovieList] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const uri = "/api/v1/movies?page=1&limit=10&status=RELEASED";
            const response = await fetch(uri);
            const result = await response.json();
            console.log(result);
            setReleasedMovieList(result.movies);

            const url = "/api/v1/movies?page=1&limit=10&status=PUBLISHED";
            const response1 = await fetch(url);
            const result1 = await response1.json();
            setUpcomingMovieList(result1.movies);
        }
        fetchApi();
    }, [reload]);

    return (
        <Fragment>
            <Header {...props} />
            <div className="homepage-upcoming-title">Upcoming Movies</div>
            <DisplayUpcomingMovies {...props} movielist={getUpcomingMovieList} />
            <DisplayReleasedMovies {...props} movielist={getReleasedMovieList} />
            <div className="filter-container">
                <span style={{ textTransform: "uppercase", fontWeight: "1200px" }}>Find Movies By</span>
                <br />
                <Input type="text" onChange={moviehandleChange} onKeyDown={reloadMovieList} placeholder="Movie Name"></Input><br />
                <InputLabel id="demo-simple-select-label">Artists</InputLabel>
                <Select
                    value={artistselect}
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={artisthandleChange}>
                    {artists.map((artist, index) =>
                        <MenuItem key={index} value={index}>{artist}</MenuItem>
                    )}
                </Select><br />
                <InputLabel id="demo-simple-select-label">Genres</InputLabel>
                <Select
                    value={genreselect}
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={genreshandleChange}>
                    {genres.map((genre, index) =>
                        <MenuItem key={index} value={index}>{genre}</MenuItem>
                    )}
                </Select><br />
                <Input type="Date" placeholder="Release Date"></Input><br />
                <Input type="Date" placeholder="Release End"></Input><br />
            </div>
        </Fragment>
    )
}