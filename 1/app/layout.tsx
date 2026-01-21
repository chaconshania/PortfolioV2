import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

const interTight = Inter_Tight({ subsets: ["latin"], weight: "400" });
const philoAB = localFont({
  src: "../fonts/philo_ar.ttf",
  display: "swap",
  variable: "--font-philo",
});

export const metadata: Metadata = {
  title: "Shania Chacon's Portfolio",
  description:
    "Portfolio of Shania Chacon, product designer and front-end developer creating intuitive human-centered digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GTP3RX2NGZ"
        ></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GTP3RX2NGZ'); 
  `}
        </script>
      </head>
      <body
        className={`${interTight.className} ${philoAB.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
