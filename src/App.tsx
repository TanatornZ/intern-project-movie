import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import MovieList from "./Pages/MovieList";
import MovieDetail from "./Pages/MovieDetail";

function App(): JSX.Element {

  return (
    <div className="max-w-screen min-h-screen h-full bg-slate-200 ">
      <Navbar />
      <div className='flex justify-center mx-32 py-32'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
