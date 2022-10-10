import axios from 'axios'
import { BarLoader } from 'react-spinners';
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from 'react'
import CarD from '../components/Card';
import Header from '../components/Header';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Dashboard = (props) => {
    //states
    const [data, setData] = React.useState([])
    const [Page, setPage] = React.useState(1)
    const [Year, setYear] = React.useState([]);
    const [loading, setloading] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [timeOutDebounce, setTimeOutDebounce] = React.useState(0);

    //variables
    let url = `https://movie-task.vercel.app/api/popular?page=${Page}`

    //fetch
    const fetchData = async (url) => {
        setloading(true)
        try {
            const response = await axios.get(url)
            setData(response.data.data.results)
            setloading(false)
        }
        catch (error) {
            console.error(error);
            setloading(false)
        }
    }

    //setting search data in api
    const performSearch = async (text) => {
        setloading(true);
        if (text.length > 0) {
            url = `https://movie-task.vercel.app/api/search?page=${Page}&query=${text}`
            fetchData(url)
            setloading(false)
        }
        else {
            fetchData(url)
            setloading(false)
        }
    };



    //function for handling search
    const handleSearch = (e, debounceTimeout) => {
        setloading(true)
        setSearch(e.target.value)
        if (timeOutDebounce !== 0) {
            clearTimeout(timeOutDebounce);
        }
        const newTimeout = setTimeout(() => {
            performSearch(e.target.value)
        }, debounceTimeout);
        setTimeOutDebounce(newTimeout);


    }

    ////function for handling Pagination
    const handlePage = (e, page) => {
        setloading(true)
        setPage(page)
        setloading(false)
    }

    useEffect(() => {
        fetchData(url);
    }, [Page])
    return (
        <>
            <Header handleSearch={handleSearch} search={search} Year={Year} setYear={setYear} />
            {loading ? (
                <>
                    <BarLoader
                        color="black"
                        height={3}
                        width="100%" />
                </>

            ) : (
                (data.length > 0) ? (
                    <>
                        {loading ? (
                            <BarLoader
                                color="black"
                                height={3}
                                width="100%" />
                        ) : (
                            <Grid style={{ padding: "20px" }}>
                                <Grid item xs={12}>
                                    <Grid container spacing={1} sx={{ padding: "100px -18px" }}>
                                        {
                                            data.map((movie) => (
                                                <Grid item xs={6} md={3} key={movie.id} >
                                                    <CarD movie={movie} setMovie={props.setMovie} />
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                        }
                        <Stack spacing={2} style={{ alignItems: "center", padding: "10px" }}>
                            <Pagination count={20} page={Page} showFirstButton showLastButton onChange={(e, page) => handlePage(e, page)} />
                        </Stack>
                    </>
                ) : (
                    <div >
                        <h1>
                            No Movies Found
                        </h1>
                    </div>
                )
            )}

        </>
    )
}

export default Dashboard