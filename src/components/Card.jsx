import React from 'react'
import TimeAgo from 'react-timeago';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import "./Card.css"
import { Link } from "react-router-dom";


const CarD = ({ movie }) => {
    const {id} = movie
    return (
        <Link className="link" to={`/Movie/${id}`}>
            <Card className="card-main">
                <CardMedia
                    className="card-media"
                    component="img"
                    height="230"
                    image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}

                />
                <CardContent className="cardContent">
                    <Typography className="typography1" variant="h6">
                        {movie.title}
                    </Typography>
                    <Typography className="typography" variant="subtitle2">
                        <TimeAgo date={movie.release_date} />
                    </Typography>
                </CardContent>
            </Card>
        </Link>

    )
}

export default CarD