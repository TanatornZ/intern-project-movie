import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function MovieCom() {
  return (
    <Link to='/moviedetail'>
      <div className='w-[280px] h-[350px] drop-shadow-lg bg-[#FEFEFE] rounded flex flex-col items-center py-4' >
          <p className='text-[#FF7A6A]'>The Godfather</p>
          <p>1972</p>
          <img className='w-[149px] h-[205px] my-4' src='https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg' />
          <div className='flex items-center'>
              <AiFillStar className='mr-1 fill-[#FFDA44]'/> <p><span className='text-[#FFDA44]'>9.3 </span>/ 10</p>
          </div>
      </div>
    </Link>
  )
}

export default MovieCom