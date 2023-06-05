"use client";

import { useState } from "react";
export default function page() {
  const [name, setName] = useState("");
  const [referencia, setReferencia] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const  data  = await fetch("/api/registrarRepuesto", {
        method: "POST",
        body: JSON.stringify({
          name,
          referencia,
          precio,
          marca
        }),
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-full flex-col justify-center items-center px-6 py-0 lg:px-8 p-10">
      <div className="bg-secondary-color py-5 w-1/2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="text-white mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Ingrese el nuevo repuesto
        </h2>
      </div>

      <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="name_field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              
              className="text-white block text-sm font-medium leading-6 text-gray-900"
            >
              Referencia
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email_field"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Precio
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="price_field"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Marca
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="brand_field"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
