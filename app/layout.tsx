import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "../globals.css";
import Cursor from "./components/Cursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-dmmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio — Creative Direction & Digital Design",
  description: "Selected work in brand identity, digital experience, and architectural design.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
