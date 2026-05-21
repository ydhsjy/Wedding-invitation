import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Great_Vibes, Poppins } from "next/font/google";
import "@/styles/globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "The Wedding of Yudha & Alda",
  description: "A modern luxury wedding invitation for Yudha and Alda.",
  openGraph: {
    title: "The Wedding of Yudha & Alda",
    description: "You are invited to celebrate the wedding of Yudha and Alda.",
    images: [`${basePath}/assets/kanan%20awal.jpeg`],
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#F8F5F0",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id" className={`${greatVibes.variable} ${cormorant.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
