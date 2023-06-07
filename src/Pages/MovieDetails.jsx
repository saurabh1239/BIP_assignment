import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import SmallCard from '../components/smallCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./MovieDetails.css"



const MovieDetails = ({ Movie }) => {
    //states
    const [MovieDetails, setMovieDetails] = useState("");
    const [string, setString] = useState(Movie.summary);

    // 
    useEffect(() => {
        const regex = /(<([^>]+)>)/gi;
        const newString = string.replace(regex, "");
        setString(newString);
    }, []);

    return (
        <div className="movie-container">
            <Link to="/">
                <ArrowBackIosIcon />
            </Link>
            <div className="big-card">
                <div className="showcase">
                    <img src={Movie.image.original} alt="" className='hero-image' />
                </div>
                <div className="summary">
                    <div className="summary-title">
                        <h1>{Movie.name}</h1>
                        <div className="chips">
                            {Movie.genres.map((item, id) => (
                                <span className="chip" key={id}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="description">
                        <p className='Movie-description'>{string}</p>
                        <hr />
                        <div className='booking-col'>
                            <p> Premiered : {Movie.premiered} </p>
                            <Link to={"/Movie/Booking"}>
                                <button className='booking-btn'>Reserve</button>
                            </Link>
                        </div>
                        <hr />
                        <div className="episodes">
                            <SmallCard title={"Prev Episode"} img={Movie.image.original} />
                            <SmallCard title={"Next Episode"} img={Movie.image.original} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails