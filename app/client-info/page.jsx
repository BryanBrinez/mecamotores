"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function User() {
  const [cedula, setCedula] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    fetchInfo();
  };

  const fetchInfo = async () => {
    try {
      const response = await fetch(`/api/users/${cedula}`);
      const data = await response.json();
      setInfo(data);
      if (data.error) {
        setError(data.error);
        console.log(data.error) 
      } else {
        router.push(`/client-info/${cedula}`);
        //console.log("inicio el cliente") 
      }
    } catch (error) { 
      //console.log(error.stack);   
      setError("Cliente no encontrado");
    }
  };

  //console.log(info)

  return (
    <div className="flex  flex-col min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 p-10">
      <div className="w-full max-w-sm  bg-seconday-color border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="text-white mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresar
          </h2>
        </div>

        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm py-6">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Documento
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              
            </div>
            {error && (
                <div
                  className="flex justify-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <p className="text-red-500 text-sm font-medium"></p>
                  <strong className="font-bold">{error}</strong>
                  <span className="block sm:inline"></span>
                  
                </div>
                
              )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
