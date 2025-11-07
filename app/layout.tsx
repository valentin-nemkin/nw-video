import type { Metadata } from "next";
import "./globals.css";
import { Fraunces, Barlow_Semi_Condensed } from "next/font/google";

export const metadata: Metadata = {
  title: "NW Video Landing",
  description: "One-page video landing built with Next.js + TailwindCSS",
};

/* === Подключение шрифтов === */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-secondary", // для заголовков
  display: "swap",
});

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-primary", // для основного текста
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${barlow.variable} max-w-screen-xl mx-auto px-4 md:px-8 scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
