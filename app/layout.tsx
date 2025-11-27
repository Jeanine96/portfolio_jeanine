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
        <div className="hidden md:flex absolute inset-0 h-screen flex-row">
          <div className="md:w-2/3 h-full bg-primary" />
          <div className="md: w-1/3 h-full bg-secondary" />
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
