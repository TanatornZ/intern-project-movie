import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";

import MovieModal from "../components/MovieModal";

function MovieDetail() {
  let navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);

  const clickShow = () => {
    setShowModal(!showModal);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-3/4 rounded-lg overflow-hidden drop-shadow-2xl relative">
      <div className="bg-[#F7F7F7] flex flex-col items-center p-5 border-b-2">
        <p className="text-[#FF7A6A] text-3xl">The Godfather</p>
        <p>1972</p>
        <img
          className="w-[149px] h-[205px] my-4 border-4 border-[#FEFEFE] drop-shadow-lg"
          src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
        />
        <div className="flex items-center">
          <AiFillStar className="mr-1 fill-[#FFDA44]" />{" "}
          <p>
            <span className="text-[#FFDA44]">9.3 </span>/ 10
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] px-12 py-10">
        <div className="">
          <p className="text-[#00CECC]">Released on</p>{" "}
          <p className="italic">1972</p>
        </div>
        <div className="mt-2">
          <p className="text-[#00CECC]">Director</p>{" "}
          <p className="italic">Francis Ford Coppola</p>
        </div>
        <div className="mt-2">
          <p className="text-[#00CECC]">Stars</p>{" "}
          <p className="italic">Al Pacino , Marlon Brando , Robert De Niro</p>
        </div>
        <div className="mt-2">
          <p className="text-[#00CECC]">Reviewers</p>{" "}
          <p className="italic">6,666 users</p>
        </div>

        <div className="flex justify-center mt-5">
          <button
            className="bg-[#FE8065] w-[150px] p-3 rounded mr-5 text-white"
            onClick={clickShow}
          >
            View Detail
          </button>
          <button
            className="w-[150px] bg-[#C3C3C3] p-3 rounded text-white"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>

      <div
        className={`${
          showModal ? "" : "hidden"
        } absolute z-10 top-10 left-20 right-20`}
      >
        {/* <MovieModal closeModal={setShowModal} /> */}
        <MovieModal closeShowModal={setShowModal} isShowModal={showModal}>
          <div className="drop-shadow-2xl bg-white  rounded py-3 px-10 ">
            <p className="text-[#FF7A6A] text-xl mb-2">Detail</p>

            <p>
              Don Vito Corleone, head of a mafia family, decides to hand over
              his empire to his youngest son Michael. However, his decision
              unintentionally puts the lives of his loved ones in grave danger.
            </p>
          </div>
        </MovieModal>
      </div>
    </div>
  );
}

export default MovieDetail;
