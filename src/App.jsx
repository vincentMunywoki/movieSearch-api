
import { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'

// 7b30dd88

const API_URL = 'http://www.omdbapi.com/?apikey=7b30dd88'

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
      </div>
    </>
  )
}

export default App
