
import { useEffect } from 'react'
import './App.css'
// 7b30dd88

const API_URL = 'http://www.omdbapi.com/?apikey=7b30dd88'

function App() {

  const searchMovie = async (title)=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    searchMovie("Batman")
  },[]);
  
  return (
    <>
      APP
    </>
  )
}

export default App
