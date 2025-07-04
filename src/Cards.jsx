import React from 'react'

import './App.css'
const Cards = ({movie}) => {
  return (
    <div>
        <div className="card">
    <div className="movieposter"><img src={movie.Poster} alt="movie poster" /></div>
    <div className='details'>
    <div><p>{movie.Title}</p></div>
    <div><p>{movie.Year}</p></div>

    </div>

  </div>
    </div>
  )
}

export default Cards
