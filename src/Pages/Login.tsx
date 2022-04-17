import React, { ChangeEvent, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>('');

  const {t} = useTranslation('translation')

  const login = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userName === "Tanatorn") {
      console.log("pass");
      navigate("/movielist");
    } else if (userName === ""){
      setError("Username is required");
    } else {
        setError("Username isn't have in database ")
    }
  };

  const setUserNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div className="w-12xl flex flex-col items-center  py-12 rounded mx-auto mt-9xl bg-white drop-shadow-2xl ">
      <h1 className="text-4xl text-slate-700 font-bold">{t('login')}</h1>
      <form className="mt-12 flex flex-col items-center">
        <input
          type="text"
          className="form-control border outline-blue-800 p-3 block "
          placeholder={t('userName')}
          name="username"
          value={userName}
          onChange={setUserNameInputHandler}
        />

        {error && <p className="text-red-700 mt-3">{error}</p>}
        <button
          className="border rounded drop-shadow-md block p-3 text-white text-xl mt-5 bg-gradient-to-r from-zinc-900 via-blue-800 to-cyan-700"
          onClick={login}
        >
          {t('signIn')}
        </button>
      </form>
    </div>
  );
}

export default Login;
