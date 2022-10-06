import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import MovieList from './components/MovieList';

const App= () => {
  const[movies, setMovies] =  useState([
    
  ]);

  const getMovieRequest = async () => {
    const url ="http://www.omdbapi.com/?s=star wars&apikey=baac0f72"

    const response = await fetch(url);
    
  }
  return
    <div className='container-fluid movie-app'>
      <div className='row'>
      <MovieList movies={movies}/>



      </div>
      
    </div>
  
};

export default App;
