import React from 'react';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


export default function DisplayUpcomingMovies(props) {

    return (
        <GridList cols={6} style={{ display: "flex", overflowX: "scroll", flex: "list-item", flexWrap: "nowrap" }}>
            {props.movielist.map((tile) => (
                <GridListTile key={tile.poster_url} style={{ height: "150px", alignContent: "center" }}>
                    <Link to={`/movie/${tile.id}`}>
                        <img src={tile.poster_url} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                        />
                    </Link>
                </GridListTile>
            ))}
        </GridList>
    )
}