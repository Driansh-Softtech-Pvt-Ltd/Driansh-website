import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Driansh Softtech",
  description: "Driansh-Softech",
  icons: {
    icon: "/site-icon.png",
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
        <Navbar />
        {children}
        <Footer />

        {/* Chatwoot Script */}
        <Script id="chatwoot-script" strategy="afterInteractive">
          {`
            (function(d,t) {
              var BASE_URL="https://app.chatwoot.com";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 'm9f7YuLFY8bd5hfLJdhZ4XjH',
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
