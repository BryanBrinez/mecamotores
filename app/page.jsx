import { Routes } from "@lib/route.model";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section
      className="relative bg-white "
      style={{
        minHeight: "calc(100vh - 66px)",
        overflow: "hidden",
      }}
    >
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center pb-12 md:pb-16 pt-20">
          <div className="flex items-center justify-center">
            <Image
              src={"/mecamotores.PNG"}
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Bienvenidos a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              MECAMOTORES
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Expertos en reparación y mantenimiento de maquinaria agrícola.
              Maximiza la eficiencia de tus equipos con nuestro taller
              especializado.
            </p>

            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div className="flex flex-row gap-8 ">
                <Link
                  href={Routes.CLIENTE.path}
                  className="w-1/2 flex w-full justify-center items-center rounded-md bg-primary-color px-5  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-third-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Revisa tu maquina
                </Link>
                <Link
                  href={Routes.LOGIN.path}
                  className="w-1/2 flex w-full justify-center items-center rounded-md bg-primary-color px-5  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-third-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Inicia sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
