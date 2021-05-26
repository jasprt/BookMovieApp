import React from 'react';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default function DisplayReleasedMovies(props) {

    return (
        <div>
            <GridList cellHeight={350} cols={4} style={{ width: "76%" }}>
                {props.movielist.map((tile) => (
                    <GridListTile key={tile.id} rows={5} cols={1} style={{ marginTop: "20px", width: "30%", height: "auto", padding: "10px" }}>
                        <Link to={`/movie/${tile.id}`}>
                            <img src={tile.poster_url} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>Realease Date: {tile.release_date}</span>}
                            />
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}