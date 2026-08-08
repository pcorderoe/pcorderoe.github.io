import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const siteUrl = "https://pcorderoe.github.io";
const title = "Patricio Cordero — Tech Lead & Full-Stack Engineer";
const description =
  "Patricio Cordero, Tech Lead and Full-Stack Engineer based in Concepción, Chile. 14+ years building products end to end and leading engineering teams.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Patricio Cordero",
  },
  description,
  keywords: [
    "Patricio Cordero",
    "Tech Lead",
    "Full-Stack Engineer",
    "Software Engineer",
    "TypeScript",
    "Node.js",
    "React",
    "React Native",
    "Chile",
  ],
  authors: [{ name: "Patricio Cordero", url: siteUrl }],
  creator: "Patricio Cordero",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Patricio Cordero",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
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
        {children}
      </body>
    </html>
  );
}
