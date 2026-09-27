import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HideOnAdmin from "@/components/HideOnAdmin";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, PAGES, SITE_NAME, SITE_URL } from "@/lib/seo";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${PAGES["/"].title}`,
    template: "%s | Driansh",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/Driansh-thumbnail.svg",
  },
  // Google Search Console ownership check (Settings → Ownership verification → HTML tag).
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Driansh Softtech Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "support@driansh.com",
  telephone: "+91-7028764776",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/104, Riverfront, GIFT City",
    addressLocality: "Gandhinagar",
    postalCode: "382426",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <HideOnAdmin>
          <Navbar />
        </HideOnAdmin>
        {children}
        <HideOnAdmin>
          <Footer />
        </HideOnAdmin>
        <AnalyticsTracker />
        <Analytics />
        <SpeedInsights />

        {/* Driansh OmniConnect Script */}
        <Script id="chatwoot-script" strategy="lazyOnload">
          {`
            (function(d,t) {
              var BASE_URL="https://chat.driansh.com";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 'MzWCsdsZrCfmo5cRm83cVkM1',
                  baseUrl: BASE_URL
                })
              }
            })(document,"script");
          `}
        </Script>
      </body>
    </html>
  );
}
 
 