import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
        />
        <link rel="icon" href="/favicon-J.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${montserrat.variable} antialiased relative min-h-screen leading-lineheight-text`}
      >
        <div className="absolute inset-0 flex">
          <div className="w-2/3 bg-primary" />
          <div className="w-1/3 bg-secondary" />
        </div>

        <div className="relative scroll-smooth">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
