"use client"
import React, { useEffect, useState } from 'react'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
//  5fb987a1
const API_URL = 'http://www.omdbapi.com?apikey=5fb987a1'

const movie1 = {
  "Title": "Spiderman",
  "Year": "2010",
  "imdbID": "tt1785572",
  "Type": "movie",
  "Poster": "N/A"
}

const page = () => {
  const [serachTerm, setserachTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Batman");
  }, [])
  return (


    <>
      <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
          <input
            placeholder='Search for Movies'
            value={serachTerm}
            onChange={(e) =>  setserachTerm(e.target.value)}

          />

          <img
          src={SearchIcon}
          alt='search'
            onClick={() => searchMovies(serachTerm)}
          />
        </div>
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
              </div>
            ) : (
              <div className='empty'>

                <h1>No movies found</h1>
              </div>
            )
        }


      </div>



    </>
  )
}


export default page