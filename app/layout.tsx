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
      </head>
      <body
        className={`${montserrat.variable} antialiased relative min-h-screen leading-lineheight-text`}
      >
        <div className="absolute top-0 left-0 h-full w-[67%] bg-primary"></div>
        <div className="absolute top-0 right-0 h-full w-[33%] bg-secondary"></div>

        <div className="relative z-1">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
