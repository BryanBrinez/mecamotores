"use client";
import Table from "@components/Table";
import { SiCanonical } from "react-icons/si";

export default function page() {
  return (
    <div className="bg-primary-color text-white p-4">
      <div className="flex  justify-center p-2 items-center gap-6">
        <button className="flex  justify-center items-center gap-1">
          Por revisar <SiCanonical style={{ color: "red" }} />
        </button>

        <button className="flex  justify-center items-center gap-1.5">
          Por reparar <SiCanonical style={{ color: "yellow" }} />
        </button>

        <button className="flex  justify-center items-center gap-1">
          Por entregar <SiCanonical style={{ color: "green" }} />
        </button>
      </div>
      <Table />
    </div>
  );
}
