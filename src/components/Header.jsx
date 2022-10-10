import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import "./Header.css"
import Select1 from './Select1';
import SearchIcon from '@mui/icons-material/Search';

//styled Search mui component
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    width: "250px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Header = (props) => {
    const {handleSearch,search} = props;
    // const [search, setSearch] = React.useState("");

    // handle search events
    // const handleChange = (event) => {
    //     setSearch(event.target.value);
    //     props.handleSearch(event.target.value)
    // }
    return (
        <div className='Header'>
            <Select1 Year={props.Year} setYear={props.setYear} />
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color='primary' />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search For Movies...."
                        value={search}
                        // onChange={handleChange}
                        onChange = {(e)=>handleSearch(e,500)}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </div >
    )
}

export default Header