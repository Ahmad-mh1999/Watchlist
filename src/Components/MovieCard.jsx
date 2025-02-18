import React from 'react'
import './MovieCard.css'
import MovieControls from './MovieControls'
function MovieCard({movie , type}) {
    return (
        <div className='movie-card'>
            <div className="overlay">
                {movie.Poster ? (<img src={movie.Poster} alt={movie.Title} /> ):(
                    <div className="empty">no poster</div>
                )}
                <MovieControls movie={movie} type={type} />
            </div>
        </div>
    )
}

export default MovieCard