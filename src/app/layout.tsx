import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://undanganaldayudha.my.id";
const previewImage = `${basePath}/assets/og-whatsapp.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Wedding of Yudha & Alda",
  description: "A modern luxury wedding invitation for Yudha and Alda.",
  openGraph: {
    title: "The Wedding of Yudha & Alda",
    description: "You are invited to celebrate the wedding of Yudha and Alda.",
    url: siteUrl,
    siteName: "The Wedding of Yudha & Alda",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "The Wedding of Yudha & Alda"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Yudha & Alda",
    description: "You are invited to celebrate the wedding of Yudha and Alda.",
    images: [previewImage]
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
