import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
const App= () => {
  const[movies, setMovies] =  useState([]);
  const [Search, setSearchValue] = useState("");
  const getMovieRequest = async () => {
    const url ="http://www.omdbapi.com/?s=avengers&apikey=baac0f72";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
     setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  },[]);

  return
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieListHeading heading ="movies"/>
      </div>
      <div className='row'>
      <MovieList movies = {movies}/>
      <SearchBox />

      </div>
      
    </div>
  
}; 

export default App;
