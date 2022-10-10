import React from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import {
    Container,
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography
}
    from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import "./MovieDetails.css"


const MovieDetails = () => {
    //states
    const [MovieDetails, setMovieDetails] = React.useState("")

    //variables
    const { id } = useParams();
    const Url = `https://movie-task.vercel.app/api/movie?movieId=${id}`

    //fetching
    const fetchData = async (url) => {
        const response = await axios.get(url)
        console.log(response.data.data, "p");
        setMovieDetails(response.data.data)
    }

    //useeffect
    React.useEffect(() => {
        fetchData(Url)
    }, [])

    return (
        <Container style={{ padding: "10px" }}>
            <Card sx={{ maxWidth: "100%" }} style={{ height: "100vh" }}>
                <CardMedia
                    component="img"
                    height="78%"
                    image={`https://image.tmdb.org/t/p/original/${MovieDetails.backdrop_path}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='mo'>
                        {MovieDetails.title}
                        <Typography variant='h6' component="div" color="green">
                            <ThumbUpIcon style={{ marginRight: "9px" }} />
                            {`${MovieDetails.vote_average}/10`}
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" className='mo'>
                        {`Release Date : ${MovieDetails.release_date}`}
                        <Typography variant="subtitle2" color="text.secondary">
                            {`Runtime : ${MovieDetails.runtime} Minutes`}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {MovieDetails.overview}
                    </Typography>
                </CardContent>
                {/* buttonlink */}
                <Link to="/">
                    <Button ><ArrowBackIosIcon />Back</Button>
                </Link>
            </Card>
        </Container>
    )
}

export default MovieDetails