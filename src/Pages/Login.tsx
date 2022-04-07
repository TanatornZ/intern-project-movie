import React, { ChangeEvent, MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>('');

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
    <div className="w-[480px] flex flex-col items-center  py-12 rounded mx-auto mt-[148px] bg-white drop-shadow-2xl ">
      <h1 className="text-4xl text-[#333] font-bold">Login</h1>
      <form className="mt-12 flex flex-col items-center">
        <input
          type="text"
          className="form-control border outline-[#2b279c] p-3 block "
          placeholder="Username"
          name="username"
          value={userName}
          onChange={setUserNameInputHandler}
        />

        {error && <p className="text-red-700 mt-3">{error}</p>}
        <button
          className="border rounded drop-shadow-md block w-24 p-3 text-white text-xl mt-5 bg-gradient-to-r from-[#020024] via-[#090979] to-[#198399]"
          onClick={login}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
