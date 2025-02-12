import { useEffect, useState } from 'react' // Importing React hooks for managing state and side effects
import './App.css' // Import CSS for styling the app
import SearchIcon from './search.svg' // Importing the search icon image
import MovieCard from './MovieCard' // Importing the MovieCard component to display movie details

// API key for accessing the OMDB API
const API_URL = 'https://www.omdbapi.com/?apikey=7b30dd88'

function App() {
  const [movies, setMovies] = useState([]) // State to store the list of movies fetched from the API
  const [searchTerm, setSearchTerm] = useState(""); // State to manage the current search term entered by the user

  // Function to search movies based on the provided title
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); // Fetch data from the OMDB API with the search term
    const data = await response.json(); // Convert the response to JSON format

    setMovies(data.Search); // Update the movies state with the fetched data
  };

  // useEffect hook to fetch movies with the default search term "Batman" when the app first loads
  useEffect(() => {
    searchMovies("Batman")
  }, []); // Empty dependency array means this runs only once when the component mounts
  
  return (
    <>
      <div className="app">
        <h1>MoviSpace</h1> {/* Application header */}

        <div className="search">
          {/* Input field for the user to type the movie name to search */}
          <input 
            placeholder="Search movies"
            value={searchTerm} // Controlled input bound to the searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state as the user types
          />

          {/* Search icon that triggers the movie search when clicked */}
          <img 
            src={SearchIcon} 
            alt='search' 
            onClick={() => searchMovies(searchTerm)} // Search movies based on the current search term
          />
        </div>

        {/* Conditional rendering Check if movies exist */}
        {movies?.length > 0 ? (
          <div className="container">
            {/* Map through the movies array and render a MovieCard component for each movie */}
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} /> // Adding a unique key for each movie
            ))}
          </div>
        ) : (
          // This message is Displayed when no movies are found
          <div className="empty">
            <h2>No Movies Found!</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default App
