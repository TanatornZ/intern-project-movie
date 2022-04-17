import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
function MovieCom():JSX.Element{

   const { t } = useTranslation();

  return (
    <Link to="/moviedetail">
      <div className="w-10xl h-11xl drop-shadow-lg bg-white rounded-2xl relative overflow-hidden flex flex-col  ">
        <img
          className="fixed top-0 w-full h-full object-cover "
          src="https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
        />
        <div className="flex items-center justify-center ml-3 z-10 py-4 w-14 h-6 m-5 bg-slate-700 drop-shadow-xl  border border-yellow-300   rounded">
          <AiFillStar className="mr-1 fill-yellow-300" />{" "}
          <p>
            <span className="text-yellow-300">9.3 </span>
          </p>
        </div>
        <div className="z-10 w-full bottom-0 fixed text-center flex flex-col p-4 bg-dark-opacity hover:bg-gray-900">
          <p className="text-white text-xl font-medium">{t('movieName')} (2016)</p>
          
        </div>
      </div>
    </Link>
  );
}

export default MovieCom;
