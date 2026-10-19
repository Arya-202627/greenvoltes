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
  title: "GreenVolt Energy Solutions | Leading Solar Company in Kerala",
  description: "GreenVolt Energy Solutions LLP is Kerala's trusted partner for complete energy solutions. Grade-A licensed electrical contractor specializing in On-Grid, Off-Grid & Hybrid Solar Systems, Smart Home Automation, CCTV Security, and Industrial Power Panels.",
  keywords: "Green Volt Energy Solutions, GreenVolt Energy Solutions, Green Volt, GreenVolt, greenvolt solar, solar energy solutions, solar kerala, solar panel installation kerala, solar company ernakulam, solar company kochi, on-grid solar kerala, hybrid solar system, renewable energy kerala, home automation kerala, industrial power solutions",
  metadataBase: new URL("https://www.greenvoltenergysolutions.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GreenVolt Energy Solutions | Leading Solar Company in Kerala",
    description: "Kerala's trusted partner for complete energy solutions. Grade-A licensed electrical contractor for Solar, Smart Automation, and Industrial Power.",
    url: "https://www.greenvoltenergysolutions.in",
    siteName: "GreenVolt Energy Solutions",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
        {/* Schema Markup for Google Knowledge Panel & Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "SolarEnergySystemBusiness", "ProfessionalService"],
              "name": "GreenVolt Energy Solutions LLP",
              "alternateName": [
                "Green Volt Energy Solutions",
                "GreenVolt Energy Solutions",
                "Green Volt",
                "GreenVolt",
                "GreenVolt Solar Kerala"
              ],
              "image": "https://www.greenvoltenergysolutions.in/images/hero-solar.jpg",
              "logo": "https://www.greenvoltenergysolutions.in/images/logo.png",
              "description": "GreenVolt Energy Solutions LLP is Kerala's leading solar energy and power systems partner. Grade-A licensed electrical contractor providing residential, commercial, and industrial solar installations, smart home automation, and energy panels.",
              "url": "https://www.greenvoltenergysolutions.in",
              "telephone": "+91-8714889721",
              "email": "info@greenvoltes.in",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "66/1150, Suite No. A6, Kalabhavan Road, Kaloor",
                "addressLocality": "Ernakulam, Kochi",
                "addressRegion": "Kerala",
                "postalCode": "682018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 9.9982,
                "longitude": 76.2917
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:30"
                }
              ],
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Kerala"
                },
                {
                  "@type": "City",
                  "name": "Kochi"
                },
                {
                  "@type": "City",
                  "name": "Ernakulam"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/greenvoltenergysolutions",
                "https://www.facebook.com/greenvoltenergysolutions"
              ]
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
