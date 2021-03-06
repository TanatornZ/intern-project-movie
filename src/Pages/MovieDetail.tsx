import React, { useState , MouseEvent} from "react";
import { AiFillStar } from "react-icons/ai";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import MovieModal from "../Components/Modal/MovieModal";
import { useTranslation } from "react-i18next";

function MovieDetail(): JSX.Element {

  const {t} = useTranslation()

  let navigate : NavigateFunction  = useNavigate();


  const [showModal, setShowModal] = useState<boolean>(false);

  const clickShow = (event: MouseEvent<HTMLButtonElement>) => {
    setShowModal(!showModal);
  };

  const handleBack = (event: MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };

  return (
    <div className="w-3/4 rounded-lg overflow-hidden drop-shadow-2xl relative">
      <div className="bg-[#F7F7F7] flex flex-col items-center border-b-2 relative ">
        <img
          src="https://img1.hulu.com/user/v3/artwork/e27cac54-3c3c-425e-b7de-67edc2c9f496?base_image_bucket_name=image_manager&base_image=c508266a-667a-4ef8-b770-bfcaaf6d4fd5&region=US&format=jpeg&size=952x536"
          className="absolute w-full h-full opacity-25 object-cover"
        />
        <AiFillLeftCircle className="absolute left-10 top-2/4 text-6xl z-10 cursor-pointer	" />
        <img
          className="w-[200px]  h-[280px] my-4 border-4 border-white drop-shadow-lg"
          src="https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
        />

        <div className="flex items-center justify-center ml-3 z-10 absolute w-14 h-6 m-5 bg-slate-800 drop-shadow-xl  border border-yellow-300   rounded">
          <AiFillStar className="mr-1 fill-yellow-300" />{" "}
          <p>
            <span className="text-yellow-300">9.3 </span>
          </p>
        </div>
        <AiFillRightCircle className="absolute right-10 top-2/4 text-6xl z-10 cursor-pointer	" />
        <p className="text-zinc-900 z-10 text-2xl font-bold mb-3">
          {t('movieName')} (2016) 
        </p>

       
      </div>
      <div className="bg-white px-12 py-10">
        <div className="">
          <p className="text-slate-800 text-xl font-bold">{t('releaseDate')}</p>{" "}
          <p className="italic">1972</p>
        </div>
        <div className="mt-2">
          <p className="text-slate-800 text-xl font-bold">{t('director')}</p>{" "}
          <p className="italic">Francis Ford Coppola</p>
        </div>
        <div className="mt-2">
          <p className="text-slate-800 text-xl font-bold">{t('star')}</p>{" "}
          <p className="italic">Al Pacino , Marlon Brando , Robert De Niro</p>
        </div>
        <div className="mt-2">
          <p className="text-slate-800 text-xl font-bold">{t('reviewers')}</p>{" "}
          <p className="italic">6,666 users</p>
        </div>

        <div className="flex justify-center mt-5">
          <button
            className=" drop-shadow-xl bg-gradient-to-r from-zinc-900 via-blue-800 to-cyan-700 w-9xl p-3 rounded mr-5 text-white"
            onClick={clickShow}
          >
            {t('viewDetail')}
          </button>
          <button
            className=" drop-shadow-xl w-9xl bg-slate-700 p-3 rounded text-white"
            onClick={handleBack}
          >
            {t('back')}          </button>
        </div>
      </div>

      <MovieModal  closeShowModal={setShowModal} isShowModal={showModal}/>
    </div>
  );
}

export default MovieDetail;
