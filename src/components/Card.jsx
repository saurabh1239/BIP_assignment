import React from 'react'
import "../Pages/Dashboard.css"
import { Link } from "react-router-dom";
import GradeIcon from '@mui/icons-material/Grade';


const CarD = ({ movie, handleCard }) => {
    return (
        <div className='card' onClick={() => handleCard(movie)}>
            <img src={movie.show.image.original} alt="" className='image' />
            <div className="card-details">
                <h3>{movie.show.name}</h3>
                <p className='rating'><GradeIcon sx="color:gold" />
                    {movie.show.rating.average ? `${movie.show.rating.average}/10` : " N.A "}</p>
            </div>
        </div>
    )
}

export default CarD