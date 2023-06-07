import React from 'react'
import "./Booking.css"
import { Link } from 'react-router-dom';

const Booking = ({ Movie }) => {
    return (
        <div className="booking-summary">
            <h1>Booking Reciept</h1>
            <div className="booking-card">
                <img src={Movie.image.original} alt="" />
                <div className="booking-details">
                    <span className='movie-name'>{Movie.name}</span>
                    <Link to="/">
                        <button className='booking-conf'>Booked</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Booking