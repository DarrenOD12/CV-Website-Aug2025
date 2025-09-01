import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ClientLayout } from "./client-layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Define the base path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/CV-Website-Aug2025' : '';

export const metadata: Metadata = {
  title: "Darren O'Donnell - Interactive CV",
  description:
    "Interactive CV website showcasing professional experience, education, and achievements with modern design and dark mode functionality",
  keywords: [
    "Darren O'Donnell",
    "CV",
    "Resume",
    "Stripe",
    "Migrations Specialist",
    "Ireland",
    "Sydney",
    "Australia",
  ],
  authors: [{ name: "Darren O'Donnell" }],
  creator: "Darren O'Donnell",
  openGraph: {
    title: "Darren O'Donnell - Interactive CV",
    description:
      "Interactive CV website showcasing professional experience, education, and achievements",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren O'Donnell - Interactive CV",
    description:
      "Interactive CV website showcasing professional experience, education, and achievements",
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
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempo.build/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <head>
        <link
          rel="preload"
          href={`${basePath}/assets/Helixa-Light.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${basePath}/assets/Callestany.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* GitHub Pages SPA routing script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Handle redirection from 404.html
            (function() {
              const query = window.location.search;
              const path = query.match(/path=([^&]*)/);
              if (path && path[1]) {
                const route = decodeURIComponent(path[1]);
                window.history.replaceState(null, null, route);
              }
            })();
          `
        }} />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
          <TempoInit />
        </ClientLayout>
      </body>
    </html>
  );
}
