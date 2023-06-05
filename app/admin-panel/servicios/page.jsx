"use client";

export default function page() {
  return (
    <div className="bg-primary-color text-white p-4">
      <div className="flex flex-col justify-center items-center gap-3">

        <div className="bg-third-color items-center rounded-md flex justify-center mt-3 mb-2 gap-2 p-2">
          <label htmlFor="inputField" className=" flex flex-row flex-shrink-0 ">Seleccionar Maquina:</label>
          <input type="text" id="inputField" className="block text-center w-full rounded-md border-0 py-1 px-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="codigo de la maquina" />
          <button className="bg-indigo-600 text-white rounded-md  px-4 py-1">Buscar</button>
        </div>
      </div>
      <div className="flex justify-center mb-4 mt-8">
        <button className="w-32 h-10 hover:bg-red-700 bg-red-500 text-white active:bg-green-600">Por revisar</button>
        <button className="w-32 h-10 bg-yellow-500 hover:bg-yellow-700 text-black">Diagnosticado</button>
        <button className="w-32 h-10 bg-blue-500 hover:bg-blue-600 text-white">Por entregar</button>
        <button className="w-32 h-10 bg-green-500 hover:bg-green-700 text-white">Entregado</button>
      </div>
      <div className="bg-third-color items-center rounded-md flex flex-col justify-center mt-3 mb-2 gap-2 p-2">
        <div className=" flex">
          <label htmlFor="inputField" className=" flex flex-row flex-shrink-0 ">Codigo</label>
          <input type="text" id="inputField" className="block text-center w-full rounded-md border-0 py-1 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
          <button className="bg-indigo-600 text-white rounded-md mx-0 px-1 py-1">..</button>
          <label htmlFor="inputField" className=" flex flex-row flex-shrink-0 ">Cantidad</label>
          <input type="text" id="inputField" className="block text-center w-full rounded-md border-0 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
        
        <button className=" w-36 h-8 mt-1 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white">Agregar Repuesto</button>
        </div>
      
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Referencia
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cigueñal
              </th>
              <td className="px-6 py-4">2324</td>
              <td className="px-6 py-4">3456-345-1443</td>
              <td className="px-6 py-4">80999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Rodamiento
              </th>
              <td className="px-6 py-4">6002</td>
              <td className="px-6 py-4">6002c322</td>
              <td className="px-6 py-4">19999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Empaquetadura
              </th>
              <td className="px-6 py-4">4566</td>
              <td className="px-6 py-4">674433</td>
              <td className="px-6 py-4">9000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-third-color  rounded-md flex flex-col  mt-12 mb-2 p-4">
          <h1>Agregar Observaciones</h1>
          <textarea className="h-14 px-10 p-2 my-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
          <button className="bg-indigo-600 text-white rounded-md  px-4 py-1">Agregar</button>
      </div>
    </div>);
}
