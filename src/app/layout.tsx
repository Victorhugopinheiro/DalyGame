import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Header} from "@/components/header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DalyGame - Encontre os melhores jogos",
  description: "Mais de 10.000 jogos par Você",
  keywords:["jogos", "games", "steam"],
  openGraph:{
    images:[`${process.env.SRC_IMAGE}/preview.png`]
  },
  robots: {
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
