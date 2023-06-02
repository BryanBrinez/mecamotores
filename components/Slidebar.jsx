"use client"
import { Routes } from "@lib/routes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname  } from "next/navigation";

export default function Slidebar() {
    
const pathname = usePathname();
  return (
    <div className="bg-neutral-900 w-60 text-white flex flex-col">
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {Routes.map((pathName) => (
          <div key={pathName.key}>
            <Link
              
              className={classNames(pathname === pathName.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',"flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base")}
              href={pathName.path}
              
            >
              {pathName.name}
            </Link>
          </div>
        ))}
      </div>
      <div>buttom part</div>
    </div>
  );
}
