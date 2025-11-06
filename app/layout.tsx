import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NW Video Landing",
  description: "One-page video landing built with Next.js + TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl mx-auto px-4 md:px-8 scroll-smooth">
        {children}
      </body>
    </html>
  );
}
