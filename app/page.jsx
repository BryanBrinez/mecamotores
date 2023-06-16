import { Routes } from "@lib/route.model";
import Link from "next/link";



export default function Home() {
  return (
    <Link href={Routes.CLIENTE.path}>Cliente</Link>
  )
}
