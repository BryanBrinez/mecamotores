import { useState, useEffect, use } from "react";

export default function ServicioMaquina({ params }) {
  const [selectedButton, setSelectedButton] = useState(params.estado);
  const [dataActualizada, setdataActualizada] = useState({});
  const [obsRecibido, setobsRecibido] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [repuestos, setRepuestos] = useState([]);
  const [selectedRepuesto, setSelectedRepuesto] = useState("");
  const [cantReps, setCantReps] = useState("");
  const [manoDeObra, setManoDeObra] = useState(0);
  

  const [arrayRepuestos, setArrayRepuestos] = useState([]);

  const idService = params._id;
  const id = params.Maquina._id;
  const idRep = selectedRepuesto._id;
  const nameRep = selectedRepuesto.name;

  //console.log(idRep)

  //fetching

  const fetchMaquina = async () => {
    const response = await fetch(`/api/service/${params._id}`);
    const data = await response.json();
    setdataActualizada(data);
    fetchArrayRepuestos();
  };

  const fetchArrayRepuestos = async () => {
    try {
      const response = await fetch(`/api/repuestos/usado/${params._id}`);

      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }

      const data = await response.json();
      setArrayRepuestos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRepuestos = async () => {
    const response = await fetch(`/api/repuestos/`);
    const data = await response.json();
    setRepuestos(data);
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

  //functions

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/service/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idService,
          obsRecibido,
        }),
      });

      if (response.ok) {
        // Actualizar la tabla y la tarjeta después de la respuesta del servidor
        setobsRecibido("")
        fetchMaquina();
      } else {
        console.log("Error al actualizar la observacion");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const submitManoDeObra = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/service/obsNote`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idService,
          manoDeObra,
        }),
      });

      if (response.ok) {
        // Actualizar la tabla y la tarjeta después de la respuesta del servidor
        setManoDeObra("")
        fetchMaquina();
      } else {
        console.log("Error al actualizar la observacion");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClose = (e) => {
    if (e.target.id === "containerModal" || selectedRepuesto === null) {
      setShowModal(false);
      //setSelectedRepuesto(null)
    }
  };

  const submitRep = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/repuestos/usado`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idService,
          idRep,
          nameRep,
          cantReps,
        }),
      });

      if (response.ok) {
        // Actualizar la tabla y la tarjeta después de la respuesta del servidor
        fetchMaquina();
        // console.log("se hizo")
      } else {
        console.log("Error al crear repuesto usado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteSelected = async (index) => {
    try {
      const response = await fetch(`/api/repuestos/usado/${params._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          index
        }),
      });

      if (response.ok) {
        fetchMaquina();
        // console.log("se hizo")
      } else {
        console.log("Error al borrar un repuesto usado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //hook useEffect
  useEffect(() => {
    if (params) {
      setSelectedButton(params.estado);
      fetchMaquina();
    }
  }, [params]);

  useEffect(() => {
    if (selectedButton) {
      fetchMaquina();
      updateHandler();
    }
  }, [selectedButton]);

  useEffect(() => {
    fetchRepuestos();
    if (showModal) {
      updateHandler();
    }
  }, []);

  useEffect(() => {
    fetchArrayRepuestos();
  }, []);



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
        <form onSubmit={submitRep} className=" flex items-center gap-2">
          <label htmlFor="inputField" className=" flex flex-row flex-shrink-0 ">
            Nombre
          </label>
          <input
            defaultValue={selectedRepuesto.name}
            type="text"
            id="nameRepField"
            className="block text-center font-bold w-full rounded-md border-0 py-1 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            disabled
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="hover:bg-indigo-500 text-white bg-indigo-600 gap-0 text-white rounded-md mx-0 px-3 py-1"
          >
            ..
          </button>
          {showModal && (
            <div
              id="containerModal"
              onClick={handleOnClose}
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
            >
              <div className="text-white bg-primary-color p-5 rounded border border-third-color">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                  <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="cursor-pointer">
                      <th scope="col" className="px-6 py-3">
                        Repuesto
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Precio
                      </th>
                    </tr>
                  </thead>

                  {repuestos.map((rep) => (
                    <tbody key={rep._id}>
                      <tr
                        onClick={() => setSelectedRepuesto(rep)}
                        className=" hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {rep.name}
                        </th>
                        <td className="px-6 py-4">{rep.precio + " COP"}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          )}

          <label
            htmlFor="inputField"
            className=" flex flex-row px-1 flex-shrink-0 "
          >
            Cantidad
          </label>
          <input
            type="number"
            maxLength="9"
            value={cantReps}
            onChange={(e) => setCantReps(e.target.value)}
            id="cantField"
            className="block text-center w-full rounded-md border-0 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <button
            type="submit"
            className=" w-36 h-8 flex-shrink-0 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white"
          >
            Agregar Repuesto
          </button>
        </form>

        <div className="justify-center items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
          <div className="flex flex-col justify-center items-center p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              {params.Maquina.tipo}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {params.Cliente.name}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {dataActualizada.estado}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {dataActualizada.notaMecanico}
            </p>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Repuesto
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3">
                  Opciones
                </th>
              </tr>
            </thead>

            {arrayRepuestos?.repuestos?.map((rep, index) => (
              <tbody key={index}>
                <tr className="  bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {rep.nameRep}
                  </th>
                  <td className="px-6 py-4">{rep.cantReps}</td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        handleDeleteSelected(index);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black-700 rounded"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <form
        className="bg-third-color  rounded-md flex flex-col  mt-12 mb-2 p-4 "
        onSubmit={submitHandler}
      >
        <div className="flex flex-col justify-center p-2 gap-3  ">
          <div>
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium leading-6 text-gray-900"
            >
              Señor mecanico, ingrese las observaciones
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

          <button
            type="submit"
            className="w-1/2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar las observaciones
          </button> 
        </div>
      </form>

      <form
        className="bg-third-color  rounded-md flex flex-col  mt-12 mb-2 p-4 "
        onSubmit={submitManoDeObra}
      >
        <div className="flex flex-col justify-center p-2 gap-3  ">
          <div>
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium leading-6 text-gray-900"
            >
              Señor mecanico, ingrese la mano de obra a cobrar
            </label>
            <div className="mt-2">
              <input
                type="number"
                id="name_field"
                value={manoDeObra}
                onChange={(e) => setManoDeObra(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-1/2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar mano de obra
          </button>
        </div>
      </form>
    </div>
  );
}
