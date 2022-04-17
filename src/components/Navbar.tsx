import React, { useEffect, useState } from "react";
import { GiPopcorn } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { JsxElement } from "typescript";
import i18n from "../API/i18n";

function Navbar():JSX.Element {
  const userName: string = "John";

  const location = useLocation();

  const [checkLogin , setCheckLogin] = useState<boolean>(true);

  const [language , setLanguage] = useState<string>('en')

  const handleLanguage = (language: string) => {
    setLanguage(language);
  }

  const switchingLanguage = (e: string) => {
    
      i18n.changeLanguage(e);
      setLanguage(e)
    
  };


  useEffect(() => {

    if (location.pathname == '/') {
        setCheckLogin(false);
    }

  },[])

  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-zinc-900 via-blue-800 to-cyan-700 w-screen fixed z-10">
      <div className="flex items-center ">
        <img  src="https://www.pngplay.com/wp-content/uploads/2/Popcorn-Transparent-File.png" className='w-15 h-10'/>
        {/* <GiPopcorn className="fill-orange-700 mr-3" size="40" /> */}
        <Link to="/"><p className="text-white">Top 10 IMDB moives</p></Link>
        
      </div>
      <div className='flex items-center text-white '>
        <p className={`mr-2 ${language === 'th' ? 'text-xl' :''}`} onClick={() =>switchingLanguage('th')}>TH</p> |
        <p className={`ml-2 ${language === 'en' ? 'text-xl' :''}`} onClick={() => switchingLanguage('en')}>EN</p>
      </div>
    </div>
  );
}

export default Navbar;
