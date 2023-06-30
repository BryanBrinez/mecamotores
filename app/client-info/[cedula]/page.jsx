"use client";

import { useState, useEffect } from "react";

export default function page({ params }) {
  const [serviceWithClient, setServiceWithClient] = useState(null);

  const fetchServiceWithClient = async () => {
    const response = await fetch(`/api/users/${params.cedula}`);
    const data = await response.json();
    setServiceWithClient(data[0]);
  };

  useEffect(() => {
    fetchServiceWithClient();
  }, []);
  return (
    <div className="mt-5">
      <section className="text-gray-600 body-font">
        <div className="container bg-white px-5 mx-auto py-8">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              ¡Muchas gracias por utilizar nuestros servicios!
            </h1>
            <div className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Estimado Sr/a. {serviceWithClient?.Cliente?.name}, queremos
              expresar nuestro más sincero agradecimiento por confiar en
              nosotros. Su apoyo y preferencia son muy valiosos para nosotros.
              Estamos comprometidos a brindarle siempre la mejor atención y
              calidad en nuestros servicios. Esperamos seguir contando con su
              confianza en el futuro.
            </div>
            <div className="flex mt-2 justify-center">
              <div className="w-20 h-1 rounded-full bg-primary-color inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className=" md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary-color mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-center">
                  Información del cliente
                </h2>

                <div className="flex flex-col items-start leading-relaxed text-base">
                  <div>
                    <strong>Nombre:</strong> {serviceWithClient?.Cliente?.name}
                  </div>
                  <div>
                    <strong>Documento:</strong>{" "}
                    {serviceWithClient?.Cliente?.cedula}
                  </div>
                  <div>
                    <strong>Telefono:</strong>{" "}
                    {serviceWithClient?.serviceWithClient?.tel}
                  </div>
                  <div>
                    <strong>Email:</strong> {serviceWithClient?.Cliente?.email}
                  </div>
                  <div>
                    <strong>Dirección:</strong>{" "}
                    {serviceWithClient?.Cliente?.direccion}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary-color mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Información de la maquina
                </h2>
                <div className="leading-relaxed text-base">
                  <div className="flex flex-col items-start leading-relaxed text-base">
                    <div>
                      <strong>Serial:</strong>{" "}
                      {serviceWithClient?.Maquina?.serial}
                    </div>
                    <div>
                      <strong>Tipo:</strong> {serviceWithClient?.Maquina?.tipo}
                    </div>
                    <div>
                      <strong>Marca:</strong>{" "}
                      {serviceWithClient?.Maquina?.marca}
                    </div>
                    <div>
                      <strong>Modelo:</strong>{" "}
                      {serviceWithClient?.Maquina?.modelo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary-color mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Información del servicio
                </h2>
                <div className="leading-relaxed text-base">
                  <div className="flex flex-col items-start leading-relaxed text-base">
                    <div>
                      <strong>Fallas:</strong> {serviceWithClient?.fallas}
                    </div>
                    <div>
                      <strong>Observación al recibir:</strong>{" "}
                      {serviceWithClient?.obsRecibido}
                    </div>
                    <div>
                      <strong>Estado:</strong> {serviceWithClient?.estado}
                    </div>
                    <div>
                      <strong>Nota mecánico:</strong>{" "}
                      {serviceWithClient?.notaMecanico}
                    </div>
                    <div>
                      <strong>Valor repuestos:</strong>{" "}
                      {serviceWithClient?.valorRepuestos}
                    </div>
                    <div>
                      <strong>Valor Mano de obra:</strong>{" "}
                      {serviceWithClient?.valorManoObra}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
