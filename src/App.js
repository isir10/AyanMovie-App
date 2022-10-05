import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import MovieList from './components/MovieList';

const App= () => {
  const[movies, setMovies] =  useState([
    
  ]);
  return
    <div className='container-fluid movie-app'>
      <div className='row'>
      <MovieList movies={movies}/>



      </div>
      
    </div>
  
};

export default App;
