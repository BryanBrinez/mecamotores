"use client";

import { useState } from "react";

export default function page() {
  // client
  const [name, setName] = useState("");
  const [cedula, setCedula] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  //maquina
  const [serial, setSerial] = useState("");
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");

  //acta de recibido
  const [tServicio, settServicio] = useState("");
  const [fallas, setFallas] = useState("");
  const [obsRecibido, setobsRecibido] = useState("");


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const  data  = await fetch("/api/ingresoMaquina", {
        method: "POST",
        body: JSON.stringify({
          name,
          cedula,
          tel,
          email,
          direccion,
          serial,
          tipo,
          marca,
          modelo,
          tServicio,
          fallas,
          obsRecibido
        }),
      });
      if (data.ok) {
        // Actualizar la tabla y la tarjeta después de la respuesta del servidor
        setName("")
        setCedula("")
        setTel("")
        setEmail("")
        setDireccion("")
        setSerial("")
        setTipo("")
        setMarca("")
        settServicio("")
        setModelo("")
        setFallas("")
        setobsRecibido("")
      } else {
        console.log("Error al actualizar la observacion");
      }

      
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="flex flex-col bg-secondary-color text-white p-4 justify-center">
      <form className="space-y-6 " onSubmit={submitHandler}>
        <div className="flex flex-row justify-center p-2 gap-3  ">
          <div className=" flex flex-col bg-third-color p-3 w-full ">
            <div className=" flex  justify-center">
              <h2>Datos cliente</h2>
            </div>

            <div>
              <label
                htmlFor="email"
                className=" text-white block text-sm font-medium leading-6 text-gray-900"
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
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Cedula
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="Cedula_field"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Telefono
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Direccion
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-third-color p-3 w-full">
            <div className=" flex  justify-center">
              <h2>Datos maquina</h2>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Serial
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Tipo
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="tipo_field"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Marca
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="tipo_field"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Modelo
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="tipo_field"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col bg-third-color p-3 w-1/2 justify-center ">
            <div className=" flex  justify-center">
              <h2>Acta de recibido</h2>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Tipo de servicio
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={tServicio}
                  onChange={(e) => settServicio(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Fallas
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={fallas}
                  onChange={(e) => setFallas(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Observaciones al recibir
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name_field"
                  value={obsRecibido}
                  onChange={(e) => setobsRecibido(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-1/2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registrar datos
          </button>
        </div>
      </form>
    </div>
  );
}
