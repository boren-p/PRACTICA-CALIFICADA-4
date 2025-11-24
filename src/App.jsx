import React from 'react';
import Header from './comps/Header';
import Footer from './comps/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Series from "./pages/Series";
import Movies from "./pages/Movies";


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
