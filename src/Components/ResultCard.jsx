import React from 'react'
import './ResultCard.css'
import { useMovieContext } from './Context/GlobalContext'
import * as actions from './Context/ActionTypes'
function ResultCard({movie}) {
    const MovieContext = useMovieContext();
    // const storeMovieWatchlist = MovieContext.watchlist.find((m)=> m.imbdID === movie.imbdID);
    // const storeMovieWatched = MovieContext.watched.find((m)=> m.imbdID === movie.imbdID);
    // const watchlistDisabled = storeMovieWatchlist ? true : storeMovieWatched ? true : console.log("false");
    // const watchedDisabled = storeMovieWatched ? true : console.log("false");
  return (
    <div className='result-card'>
        <div className="poster-wrapper">
            {movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> : (<div className='empty'>

            </div>)}
        </div>
        <div className="info">
            <div className="heading">
                <h3 className='title'>{movie.Title}</h3>
                {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : "--"}
            </div>
            <div className="controls ">
                <button 
                    className='btn'
                    
                    onClick={()=> MovieContext.MoviesDispatch(
                    {   type :actions.ADD_MOVIE_TO_WATCHLIST , 
                        payload : movie}
                )}  >Add to WatchList</button>
                <button 
                        className='btn'
                        
                        onClick={()=> MovieContext.MoviesDispatch(
                    {
                        type : actions.ADD_MOVIE_TO_WATCHED,
                        payload : movie,
                    }
                )} >Add to Watched</button>
            </div>
        </div>
        
    </div>
  )
}

export default ResultCard