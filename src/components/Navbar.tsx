import React from "react";
import { GiPopcorn } from "react-icons/gi";
import { Link } from "react-router-dom";
function Navbar() {
  const userName: string = "John";

  return (
    <div className="flex items-center justify-between px-10 py-3 bg-[#00CECC]">
      <div className="flex items-center ">
        <img  src="https://www.pngplay.com/wp-content/uploads/2/Popcorn-Transparent-File.png" className='w-15 h-10'/>
        {/* <GiPopcorn className="fill-orange-700 mr-3" size="40" /> */}
        <Link to="/"><p className="text-white">Top 10 IMDB moives</p></Link>
        
      </div>
      <p className="text-white">hi , {userName} </p>
    </div>
  );
}

export default Navbar;
