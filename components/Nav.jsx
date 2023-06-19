"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Nav() {
  const { data } = useSession();

  return (
    <>
      <nav className="bg-primary-color max-w-screen text-white flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex gap-2 flex-center">
          <p className=" ">Mecamotores</p>
        </Link>
        <div className="sm:flex hidden">
          {data ? (
            <div className="flex gap-3 md:gap-5">
              <p className="">{data?.user?.name}</p>

              <button type="button" onClick={signOut} className="black_btn">
                Cerrar sesión
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" type="button" className="black_btn">
                Sign in
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
