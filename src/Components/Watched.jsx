import React from 'react'
import { useMovieContext } from './Context/GlobalContext'
import MovieCard from './MovieCard';
import './Watched.css'
function Watched() {
    const MovieContext = useMovieContext();
  return (
    <div className='watched'>
        <div className="container">
            <div className="main-heading">
                <h1>Watched List</h1>
                <span className='movies-count'>
                    {MovieContext.watched.length}
                    {MovieContext.watched.length === 1 ? " Movie" : " Movies"}
                </span>
            </div>
            {MovieContext.watched.length > 0 ? 
                (<div className='movie-grid'>
                    {MovieContext.watched.map((movie) =>(
                        <MovieCard key={movie.imdbID} movie={movie} type="watched" />
                    ))}
                </div>) : <h2 className='no-movies'>No Movies in Your Watched list, watch some!!</h2>}
        </div>
    </div>
  )
}

export default Watched