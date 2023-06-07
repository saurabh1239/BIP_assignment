import React from 'react'
import "./smallCard.css"
import { Link } from 'react-router-dom'

const SmallCard = ({ title, img, dropLink }) => {
    return (
        <div className='smallcard'>
            <img src={img} alt="" className='small-image' />
            <div className="smallCard-details">
                <h3>{title}</h3>
            </div>
        </div>

    )
}

export default SmallCard