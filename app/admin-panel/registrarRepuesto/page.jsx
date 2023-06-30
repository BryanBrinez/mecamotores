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
      const data = await fetch("/api/registrarRepuesto", {
        method: "POST",
        body: JSON.stringify({
          name,
          referencia,
          precio,
          marca,
        }),
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-[calc(100vh - 20px)]"
      style={{
        minHeight: "calc(100vh - 100px)",
        overflow: "hidden",
      }}
    >
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className=" flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Registra un repuesto
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
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
              <label className="text-white block text-sm font-medium leading-6 text-gray-900">
                Referencia
              </label>
              <div className="mt-2">
                <input
                  type="text"
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
                type="text"
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
                type="text"
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
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
