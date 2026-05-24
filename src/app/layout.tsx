import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {
  Bellefair,
  Cinzel_Decorative,
  Crete_Round,
  EB_Garamond,
  Pinyon_Script,
  Playfair_Display,
  Quattrocento,
  Shippori_Mincho
} from "next/font/google";
import "@/styles/globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon-script"
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair-display"
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattrocento"
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellefair"
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-shippori-mincho"
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel-decorative"
});

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-crete-round"
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
    <html
      lang="id"
      className={[
        pinyonScript.variable,
        ebGaramond.variable,
        playfairDisplay.variable,
        quattrocento.variable,
        bellefair.variable,
        shipporiMincho.variable,
        cinzelDecorative.variable,
        creteRound.variable
      ].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
