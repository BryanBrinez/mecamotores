"use client"
import Nav from "@components/Nav";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="main">
          <div className="gradiant" />
        </div>
        <main className="app">
          <SessionProvider>
            <Nav />
            {children}
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
