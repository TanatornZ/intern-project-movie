import React from "react";
import MovieCom from "../Components/MovieCom";

function MovieList(): JSX.Element {
  const movies: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className="grid grid-cols-3 items-center justify-items-center gap-10  ">
        {movies.map((movie) => (
            <MovieCom key={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
