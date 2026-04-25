import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomCursor from "@/components/CustomCursor";

import { IBM_Plex_Mono, Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm-plex-mono",
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
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
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
        className={`${geist.className} ${ibmPlexMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:ring-2 focus:ring-black"
        >
          Skip to content
        </a>
        <CustomCursor />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div id="main-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
