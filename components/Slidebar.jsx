"use client";
import { Routes } from "@lib/route.model";
//import { Routes } from "@lib/routes";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const routes = [Routes.ADMINPANEL, Routes.SERVICIOS, Routes.RECIBIRMAQUINA, Routes.REGISTERUSER];
export default function Slidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-primary-color w-60 text-white flex flex-col">
      <div className="flex-1 py-6 flex flex-col gap-0.5">
        {routes.map((pathName) => (
          <div key={pathName.key}>
            <Link
              className={classNames(
                pathname === pathName.path
                  ? "bg-neutral-700 text-white"
                  : "text-neutral-400",
                "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"
              )}
              href={pathName.path}
            >
              {pathName.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        buttom part
        <buttom
          className={classNames(
            "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base",
            "cursor-pointer text-red-500"
          )}
          onClick={signOut}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </buttom>
      </div>
    </div>
  );
}
