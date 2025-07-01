import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

export const metadada: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos",
    url: "https://blog-next-pages.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://blog-next-pages.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ]
  }
}

export default function HomePage() {
  return (
    <>
      <LandingPage />
    </>
  )
}