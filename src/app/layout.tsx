import type { Metadata } from "next";
import { Montserrat, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GreenVolt Energy Solutions | Renewable, Smart & Industrial Power",
  description: "Kerala's trusted partner for complete energy solutions. Expert installation of Solar Systems, Smart Home Automation, CCTV Security, and Industrial Power Panels.",
  keywords: "solar kerala, solar panel installation kerala, on-grid solar kerala, hybrid solar system, renewable energy kerala, home automation kerala, industrial power solutions, cctv security, ev charging infrastructure",
  metadataBase: new URL("https://www.greenvoltenergysolutions.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GreenVolt Energy Solutions | Renewable, Smart & Industrial Power",
    description: "Kerala's trusted partner for complete energy solutions. Expert installation of Solar Systems, Smart Home Automation, CCTV Security, and Industrial Power Panels.",
    url: "https://www.greenvoltenergysolutions.in",
    siteName: "GreenVolt Energy Solutions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} ${openSans.variable}`}>
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GreenVolt Energy Solutions LLP",
              "description": "Kerala's trusted partner for complete energy solutions including Solar Systems, Smart Automation, and Industrial Power Panels.",
              "url": "https://greenvoltenergysolutions.in",
              "telephone": "+91-8714889721",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "areaServed": "Kerala",
              "sameAs": [],
              "priceRange": "₹₹"
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
