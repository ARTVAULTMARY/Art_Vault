"use client"

export default function LoginInputs() {

  return (
    <>
      <div className="flex flex-col mb-4 w-11/12">  
        <label className="flex text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input className="flex shadow appearance-none border rounded self-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
        <p>{/* Error Message */}</p>
      </div>

      <div className="flex flex-col mb-4 w-11/12">  
        <label className="flex text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input className="flex shadow appearance-none border rounded self-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
        <p>{/* Error Message */}</p>
      </div>
    </>
  );
};
