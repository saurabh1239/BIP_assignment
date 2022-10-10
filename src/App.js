import Dashboard from './Pages/Dashboard';
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
// import Home from './Pages/Home'; 
import MovieDetails from './Pages/MovieDetails';
import ErrorPage from './Pages/ErrorPage';

function App() {
  const [Movie,setMovie] = React.useState("")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/Movie/:id" element={<MovieDetails />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
