import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ydhsjy.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
