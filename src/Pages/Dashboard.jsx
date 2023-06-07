import axios from 'axios'
import { BarLoader } from 'react-spinners';
import "./Dashboard.css"
import React, { useEffect } from 'react'
import CarD from '../components/Card';
import { Link } from 'react-router-dom';


const Dashboard = ({ data, loading, handleCard }) => {

    return (
        <div className="container">
            {loading ? (
                <>
                    <BarLoader
                        color="white"
                        height={3}
                        width="100%" />
                </>

            ) : (
                (data.length > 0) ? (
                    <>
                        {loading ? (
                            <BarLoader
                                color="white"
                                height={3}
                                width="100%" />
                        ) : (
                            <div className="cards">
                                {data.map((movie, id) => (
                                    <Link to="/Movie" key={id}>
                                        <CarD movie={movie} handleCard={handleCard} />
                                    </Link>
                                ))}
                            </div>
                        )
                        }
                    </>
                ) : (
                    <div >
                        <h1>
                            No Movies Found
                        </h1>
                    </div>
                )
            )}

        </div>
    )
}

export default Dashboard