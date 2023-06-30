"use client";
import Slidebar from "@components/Slidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const { data } = useSession();
  const router = useRouter();
  return (
    <div className=" bg-fifth-color h-[calc(100vh-66px)] overflow-hidden flex flex-row">
      {data ? (
        <>
      <Slidebar />
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          {children}
        </div>
      </div>
      </>
      ) : (
        router.push("/login")
      )}
    </div>
  );
}
