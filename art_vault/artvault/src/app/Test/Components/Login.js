"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginInputs from "./LoginInputs";
import { setUser } from "../../store/session"

export default function Login () {
  const dispatch = useDispatch();
  const [isRevealed, setIsRevealed] = useState("false")
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setUser(userData));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    //Todo Dispatch action for logout
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsRevealed(!isRevealed);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col w-11/12 sm:w-9/12 md:w-9/12 xl:w-3/6 max-w-screen-sm m-20 bg-stone-100 rounded">
        <form className="flex flex-col items-center m-8">
            <LoginInputs />
            <div className="flex flex-row justify-between w-11/12 mt-3">
              <button onClick={handleLogin} className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Login
              </button>
              <button onClick={handleClick} className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded">
                User Info
              </button>                 
              <button onClick={handleLogout} className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Logout
              </button>
            </div>
        </form>
        {!isRevealed ? 
          <div className="flex flex-column justify-center w-full mt-4">
            <div className="flex flex-row">
              <h1>User Data:</h1>
            </div> 
          </div> : null
        }
      </div>
    </div>
  );
};
