import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  return (
    <div className="w-[480px] flex flex-col items-center  py-12 rounded mx-auto mt-[148px] bg-white drop-shadow-2xl ">
      <h1 className="text-4xl text-[#FF7A6A]">Login</h1>
      <form className="mt-12 flex flex-col items-center">
        <input
          type="text"
          className="form-control border p-2 block"
          placeholder="Username"
        />

        {error && <p className="text-red-700 mt-3">Username is required</p>}
        <Link to="/movielist">
          <button className="border block w-24 p-2 text-white mt-5 bg-[#FE8065]">
            submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
