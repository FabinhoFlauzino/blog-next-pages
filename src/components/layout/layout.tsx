import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen dark">
      <Header />
      <main className="flex-1 flex flex-col mb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
