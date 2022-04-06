import React from 'react'
import MovieCom from '../components/MovieCom'

function MovieList() {
  return (
    <div>
      <div className='grid grid-cols-3 items-center justify-items-center gap-10  '>
        <MovieCom />
        <MovieCom />
        <MovieCom />
        <MovieCom />
        <MovieCom />
        <MovieCom />
      </div>
    </div>
  )
}

export default MovieList