import React, { useEffect, useState } from "react";
import { GiPopcorn } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const userName: string = "John";

  const location = useLocation();

  const [checkLogin , setCheckLogin] = useState<boolean>(true);

  const [language , setLanguage] = useState<string>('th')

  const handleLanguage = (language: string) => {
    setLanguage(language);
  }

  

  useEffect(() => {

    if (location.pathname == '/') {
        setCheckLogin(false);
    }

  },[])

  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-[#020024] via-[#090979] to-[#198399] w-screen fixed z-10">
      <div className="flex items-center ">
        <img  src="https://www.pngplay.com/wp-content/uploads/2/Popcorn-Transparent-File.png" className='w-15 h-10'/>
        {/* <GiPopcorn className="fill-orange-700 mr-3" size="40" /> */}
        <Link to="/"><p className="text-white">Top 10 IMDB moives</p></Link>
        
      </div>
      <div className='flex items-center text-white '>
        <p className={`mr-2 ${language === 'th' ? 'text-xl' :''}`} onClick={()=> handleLanguage('th')}>TH</p> |
        <p className={`ml-2 ${language === 'en' ? 'text-xl' :''}`} onClick={()=> handleLanguage('en')}>EN</p>
      </div>
    </div>
  );
}

export default Navbar;
