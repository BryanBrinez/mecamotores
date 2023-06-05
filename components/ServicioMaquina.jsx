import { useState, useEffect } from "react";


export default function ServicioMaquina({ params }) {
  const [maquina, setMaquina] = useState("");

  const fetchMaquina = async () => {
    const response = await fetch(`/api/maquina/${params}`);
    const data = await response.json();
    setMaquina(data);
  };

  useEffect(() => {
    fetchMaquina();
  }, [params]);
  return (
    <div className="bg-primary-color text-white p-4">
      <div className="flex flex-col justify-center items-center gap-3"></div>
      <div className="flex justify-center mb-4 mt-8">
        <button className="w-32 h-10 hover:bg-red-700 bg-red-500 text-white active:bg-green-600">
          Por revisar
        </button>
        <button className="w-32 h-10 bg-yellow-500 hover:bg-yellow-700 text-black">
          Diagnosticado
        </button>
        <button className="w-32 h-10 bg-blue-500 hover:bg-blue-600 text-white">
          Por entregar
        </button>
        <button className="w-32 h-10 bg-green-500 hover:bg-green-700 text-white">
          Entregado
        </button>
      </div>
      <div className="flex  justify-end mb-4 mt-10">
        <button className=" w-36 h-8 mt-1 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white">
          Agregar Repuesto
        </button>
      </div>
      <div className="flex  justify-center items-center mt-0 overflow-x-auto ">
        {
          <div className="justify-center items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {maquina.tipo}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Repuestos
            </p>
          </div>
        }
      </div>
      <div className="bg-third-color  rounded-md flex flex-col  mt-12 mb-2 p-4">
        <h1>Agregar Observaciones</h1>
        <textarea className="h-14 px-10 p-2 my-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
        <button className="bg-indigo-600 text-white rounded-md  px-4 py-1">
          Agregar
        </button>
      </div>
    </div>
  );
}
