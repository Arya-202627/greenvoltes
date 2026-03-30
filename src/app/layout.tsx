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
  title: "GreenVolt Energy Solutions | Solar Panel Installation Kerala",
  description: "Kerala's trusted solar energy partner. Expert installation of On-Grid, Off-Grid & Hybrid solar systems for homes and businesses. Government subsidy support, EMI options available. Get your free solar quote today!",
  keywords: "solar kerala, solar panel installation kerala, on-grid solar kerala, off-grid solar, hybrid solar system, solar subsidy kerala, solar energy solutions, renewable energy kerala, rooftop solar kerala",
  metadataBase: new URL("https://www.greenvoltes.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GreenVolt Energy Solutions | Solar Panel Installation Kerala",
    description: "Kerala's trusted solar energy partner. Expert installation of On-Grid, Off-Grid & Hybrid solar systems.",
    url: "https://www.greenvoltes.in",
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
              "description": "Kerala's trusted solar energy partner providing On-Grid, Off-Grid & Hybrid solar systems.",
              "url": "https://greenvoltes.in",
              "telephone": "+91-XXXXXXXXXX",
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
