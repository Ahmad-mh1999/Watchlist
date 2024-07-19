import React, { useEffect, useState } from 'react'
import './Add.css'
import axios from 'axios'
import ResultCard from './ResultCard'
function Add() {
    const [search , setSearch] = useState('')
    const [movies ,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=fa5c6715`)
        .then((response )=> {
            if(response.data.Search){
                setMovies(response.data.Search)
            }
        }).catch((error)=>console.log(error))
    },[search])
  return (
    <div className='add-page'>
        <div className="container">
            <div className="add-content">
                <div className="input-container">
                    <input 
                    type='text' 
                    placeholder='Search For a Movie'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}  />
                </div>
                {
                    movies.length > 0 &&
                    <ul className="results">
                    {movies.map((movie )=> (
                        <li key={movie.imdbID} >{<ResultCard movie={movie} />}</li>
                    ))}
                    </ul>
                }
            </div>
        </div>
    </div>
  )
}

export default Add