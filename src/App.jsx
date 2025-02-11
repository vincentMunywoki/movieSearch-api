
import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

// 7b30dd88

const API_URL = 'http://www.omdbapi.com/?apikey=7b30dd88'

const movie = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
}

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title)=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman")
  },[]);
  
  return (
    <>
      <div className="app">
        <h1>MoviSpace</h1>

        <div className="search">
          <input placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt='search' onClick= {() => searchMovies(searchTerm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found!</h2>
          </div>
        ) }

        <MovieCard movie={movie} />
      </div>
    </>
  )
}

export default App
