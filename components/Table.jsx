"use client";
import { useState, useEffect } from "react";
import TablaAux from "./TablaAux";

export default function Table() {
  const [allMaqClient, setallMaqClient] = useState([]);

  const fetchMaqClient = async () => {
    const response = await fetch("/api/ingresoMaquina");
    const data = await response.json();
    setallMaqClient(data);
  };
  useEffect(() => {
    fetchMaqClient();
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <TablaAux datos={allMaqClient}/>
    </div>
  );
}
