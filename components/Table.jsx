"use client";
import { useState, useEffect } from "react";
import TablaAux from "./TablaAux";
import ServicioMaquina from "./ServicioMaquina";

export default function Table() {
  const [allMaqClient, setallMaqClient] = useState([]);
  const [tablaMaqClient, setalltablaMaqClient] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const fetchMaqClient = async () => {
    const response = await fetch("/api/ingresoMaquina");
    const data = await response.json();
    setallMaqClient(data);
    setalltablaMaqClient(data);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaMaqClient.filter((elemento) => {
      if (
        elemento.Cliente.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Maquina.tipo
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Maquina.marca
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setallMaqClient(resultadosBusqueda);
  };

  useEffect(() => {
    fetchMaqClient();
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="bg-third-color items-center rounded-md flex justify-center mt-3 mb-2 gap-2 p-2">
          <label htmlFor="inputField" className=" flex flex-row flex-shrink-0 ">
            Seleccionar Maquina:
          </label>
          <input
            type="text"
            id="inputField"
            value={busqueda}
            onChange={handleChange}
            className="block text-center w-full rounded-md border-0 py-1 px-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="codigo de la maquina"
          />
          <button className="bg-indigo-600 text-white rounded-md  px-4 py-1">
            Buscar
          </button>
        </div>
      </div>
      <TablaAux datos={allMaqClient} />
     
    </div>
  );
}
