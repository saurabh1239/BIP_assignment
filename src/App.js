import Dashboard from './Pages/Dashboard';
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
// import Home from './Pages/Home'; 
import MovieDetails from './Pages/MovieDetails';
import ErrorPage from './Pages/ErrorPage';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './components/Header';
import Booking from './Pages/Booking';

function App() {
  //states
  const [data, setData] = React.useState([])
  const [loading, setloading] = React.useState(true);
  const [Movie, setMovie] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [timeOutDebounce, setTimeOutDebounce] = React.useState(0);
  //variables
  let url = `https://api.tvmaze.com/search/shows?q=all`;

  //fetch
  const fetchData = async (url) => {
    try {
      setloading(true)
      const response = await axios.get(url);
      setData(response.data)
      setloading(false)
    }
    catch (error) {
      console.error(error);
      setloading(false)
    }
  }



  // search logic
  const handleSearch = (e, debounceTimeout) => {
    setloading(true)
    setSearch(e.target.value)
    if (timeOutDebounce !== 0) {
      clearTimeout(timeOutDebounce);
    }
    const newTimeout = setTimeout(() => {
      fetchData(`https://api.tvmaze.com/search/shows?q=${search}`)
    }, debounceTimeout);
    setTimeOutDebounce(newTimeout);


  }

  // setting movie
  const handleCard = (id) => {
    const selectMovie = id.show
    setMovie(selectMovie)
  }

  // useEffect
  useEffect(() => {
    fetchData(url);
  }, [search])

  return (
    <BrowserRouter>
      <Header search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <Routes>
        <Route exact path="/"
          element={<Dashboard fetchData={fetchData} data={data}
            loading={loading} search={search} setSearch={setSearch}
            handleSearch={handleSearch} handleCard={handleCard} />} />
        <Route exact path="/Movie" element={<MovieDetails Movie={Movie} />} />
        <Route exact path="/Movie/Booking" element={<Booking Movie={Movie} />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
