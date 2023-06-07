import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation } from 'react-router-dom';


const Header = ({ search, setSearch, handleSearch }) => {
    const location = useLocation();
    return (
        <div className='Header'>
            <Link to="/">
                <span className="logo" >
                    <span>X</span>
                    Flix
                </span>
            </Link>
            {(location.pathname === "/") ?
                <span className="searchBar">
                    <input type="text" className='searchBar-input' placeholder="Search" value={search} onChange={handleSearch} />
                    <button className="searchBar-button"><SearchIcon fontSize="small" sx={{ color: "white" }} /></button>
                </span> :
                <></>
            }
        </div >
    )
}

export default Header