import React, { useState, useEffect } from "react";
import ServicioMaquina from "@components/ServicioMaquina";

export default function TablaAux({ datos }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [tablaDatos, setTablaDatos] = useState(datos);

  useEffect(() => {
    setTablaDatos(datos);
  }, [datos]);

  
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Modelo
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo
            </th>
            <th scope="col" className="px-6 py-3">
              Marca
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
          </tr>
        </thead>
        {datos.map((cliente) => (
          <tbody key={cliente._id}>
            <tr
              className="hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              onClick={() => setSelectedItem(cliente)}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {cliente.Cliente.name}
              </th>
              <td className="px-6 py-4">{cliente.Maquina.modelo}</td>
              <td className="px-6 py-4">{cliente.Maquina.tipo}</td>
              <td className="px-6 py-4">{cliente.Maquina.marca}</td>
              <td className="px-6 py-4">{cliente.estado}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {selectedItem && (
        <ServicioMaquina params={selectedItem} />
      )}
    </>
  );
}
