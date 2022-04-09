import React from "react";
import MovieCom from "../components/MovieCom";

function MovieList() {
  const Movies: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className="grid grid-cols-3 items-center justify-items-center gap-10  ">
        {Movies.map((movie) => (
            <MovieCom key={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
