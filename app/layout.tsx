import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import HeaderNav from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Foot Jewel ",
  description: "Online shoe store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderNav />
        <div className=" min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
