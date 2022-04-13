import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import MovieModal from "../Components/Modal/MovieModal";
import { useTranslation } from "react-i18next";

function MovieDetail() {

  const {t} = useTranslation('translation' , {keyPrefix : 'component'})

  let navigate = useNavigate();


  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);

  const clickShow = () => {
    setShowModal(!showModal);
  };

  const handleBack = () => {
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
          className="w-[200px]  h-[280px] my-4 border-4 border-[#FEFEFE] drop-shadow-lg"
          src="https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
        />

        <div className="flex items-center justify-center ml-3 z-10 absolute w-14 h-6 m-5 bg-[#252525] drop-shadow-xl  border border-[#FFDA44]   rounded">
          <AiFillStar className="mr-1 fill-[#FFDA44]" />{" "}
          <p>
            <span className="text-[#FFDA44]">9.3 </span>
          </p>
        </div>
        <AiFillRightCircle className="absolute right-10 top-2/4 text-6xl z-10 cursor-pointer	" />
        <p className="text-[rgb(3,3,3)] z-10 text-2xl font-bold mb-3">
          Deadpool (2016) 
        </p>

        {/* <div className="flex items-center z-10 p-3">
          <AiFillStar className="mr-1 fill-[#FFDA44]" />{" "}
          <p>
            <span className="text-[#FFDA44]">9.3 </span>/ 10
          </p>
        </div> */}
      </div>
      <div className="bg-[#FFFFFF] px-12 py-10">
        <div className="">
          <p className="text-[#333] text-xl font-bold">{t('Release date')}</p>{" "}
          <p className="italic">1972</p>
        </div>
        <div className="mt-2">
          <p className="text-[#333] text-xl font-bold">{t('Release date')}</p>{" "}
          <p className="italic">Francis Ford Coppola</p>
        </div>
        <div className="mt-2">
          <p className="text-[#333] text-xl font-bold">{t('Release date')}</p>{" "}
          <p className="italic">Al Pacino , Marlon Brando , Robert De Niro</p>
        </div>
        <div className="mt-2">
          <p className="text-[#333] text-xl font-bold">{t('reviewers')}</p>{" "}
          <p className="italic">6,666 users</p>
        </div>

        <div className="flex justify-center mt-5">
          <button
            className=" drop-shadow-xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#198399] w-[150px] p-3 rounded mr-5 text-white"
            onClick={clickShow}
          >
            View Detail
          </button>
          <button
            className=" drop-shadow-xl w-[150px] bg-[#C3C3C3] p-3 rounded text-white"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>

      <MovieModal  closeShowModal={setShowModal} isShowModal={showModal}/>
    </div>
  );
}

export default MovieDetail;
