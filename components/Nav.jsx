"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";



export default function Nav() {
  const {data} = useSession();
  
  return (
    <>
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
          <p className="logo_text">Mecanicos Univalle</p>
        </Link>
        <div className="sm:flex hidden">
          {data ? (
            <div className="flex gap-3 md:gap-5">
              <p className="logo_text">{data?.user?.name}</p>
              <Link href="/" className="black_btn">
                Button 1
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" type="button" className="black_btn">
                Sign in
              </Link >
            </>
          )}
        </div>
      </nav>
    </>
  );
}
