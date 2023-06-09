
import { useState, useEffect } from "react";

export default function ServicioMaquina({ params }) {
  const [maquina, setMaquina] = useState("");
  const [selectedButton, setSelectedButton] = useState(params.estado);
  const [datosIngresados, setDatosIngresados] = useState({});
  
  const id = params.Maquina._id;

  useEffect(() => {
    if (params) {
      setSelectedButton(params.estado);
    }
  }, [params]);
  
  const fetchMaquina = async () => {
    const response = await fetch(`/api/maquina/${params.Maquina._id}`);
    const data = await response.json();
    setMaquina(data);
  };

  const updateHandler = async () => {
    try {
      const response = await fetch(`/api/maquina/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          selectedButton,
        }),
      });

      if (response.ok) {
        // Actualizar la tabla y la tarjeta después de la respuesta del servidor
        fetchMaquina();
      } else {
        console.log("Error al actualizar el estado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMaquina();
  }, [params.Maquina._id]);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  useEffect(() => {
    if (selectedButton) {
      updateHandler();
    }
  }, [selectedButton]);

  return (
    <div className="bg-primary-color text-white p-4">
      <div className="flex justify-center mb-4 mt-8">
        <button
          className={`w-32 h-10 font-bold rounded-tl-md rounded-bl-md border-b-2 ${
            selectedButton === "Por revisar"
              ? "bg-red-600 hover:bg-red-700 text-white active:bg-red-200"
              : "bg-white text-black border-b-2 border-red-600 hover:bg-red-600 active:bg-red-200"
          }`}
          onClick={() => handleButtonClick("Por revisar")}
        >
          Por revisar
        </button>
        <button
          className={`w-32 h-10 font-bold ${
            selectedButton === "Diagnosticado"
              ? "bg-yellow-500 hover:bg-yellow-600 text-white active:bg-yellow-200"
              : "bg-white border-b-2 border-yellow-500 hover:bg-yellow-500 text-black active:bg-yellow-200"
          }`}
          onClick={() => handleButtonClick("Diagnosticado")}
        >
          Diagnosticado
        </button>
        <button
          className={`w-32 h-10 font-bold ${
            selectedButton === "Por entregar"
              ? "bg-green-600 hover:bg-green-700 text-white active:bg-green-200"
              : "bg-white text-black border-b-2 border-green-500 hover:bg-green-600 active:bg-green-200"
          }`}
          onClick={() => handleButtonClick("Por entregar")}
        >
          Por entregar
        </button>
        <button
          className={`w-32 h-10 font-bold rounded-tr-md rounded-br-md border-b-2 ${
            selectedButton === "Entregado"
              ? "bg-blue-700 hover:bg-blue-800 text-white active:bg-blue-200"
              : "bg-white rounded-tr-md rounded-br-md border-blue-500 hover:bg-blue-700 text-black active:bg-blue-200"
          }`}
          onClick={() => handleButtonClick("Entregado")}
        >
          Entregado
        </button>
      </div>

      <div className="bg-third-color items-center rounded-md flex flex-col justify-center mt-3 mb-2 gap-2 p-2">
        <div className=" flex items-center gap-2">
          <label htmlFor="inputField" className=" flex flex-row flex-shrink-0 ">
            Codigo
          </label>
          <input
            type="text"
            id="inputField"
            className="block text-center w-full rounded-md border-0 py-1 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button className="bg-indigo-600 gap-0 text-white rounded-md mx-0 px-3 py-1">
            ..
          </button>
          <label
            htmlFor="inputField"
            className=" flex flex-row px-1 flex-shrink-0 "
          >
            Cantidad
          </label>
          <input
            type="text"
            id="inputField"
            className="block text-center w-full rounded-md border-0 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <button className=" w-36 h-8 flex-shrink-0 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white">
            Agregar Repuesto
          </button>
        </div>
        
          <div className="justify-center items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {params.Maquina.tipo}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {params.Cliente.name}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {selectedButton}
            </p>
          </div>
      
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
