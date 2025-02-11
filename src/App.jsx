
import { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'

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

  const searchMovie = async (title)=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovie("Batman")
  },[]);
  
  return (
    <>
      <div className="app">
        <h1>MoviSpace</h1>

        <div className="search">
          <input placeholder="Search movies"
          value="Batman"
          onChange={() => {}} />

          <img src={SearchIcon} alt='search' onClick= {() => { }} />
        </div>

        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
