import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
function MovieCom() {
  return (
    <Link to="/moviedetail">
      <div className="w-[280px] h-[380px] drop-shadow-lg bg-[#FEFEFE] rounded-2xl relative overflow-hidden flex flex-col  ">
        <img
          className="fixed top-0 w-full h-full object-cover "
          src="https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
        />
        <div className="flex items-center justify-center ml-3 z-10 py-4 w-14 h-6 m-5 bg-[#252525] drop-shadow-xl  border border-[#FFDA44]   rounded">
          <AiFillStar className="mr-1 fill-[#FFDA44]" />{" "}
          <p>
            <span className="text-[#FFDA44]">9.3 </span>
          </p>
        </div>
        <div className="z-10 w-full bottom-0 fixed text-center flex flex-col p-4 bg-[rgba(20,20,20,0.5)] hover:bg-[rgba(25,25,25,1)]">
          <p className="text-[rgb(245,245,247)] text-xl font-medium">Deadpool (2016) เดดพูล นักสู้พันธุ์เกรียน</p>
          
        </div>
      </div>
    </Link>
  );
}

export default MovieCom;
