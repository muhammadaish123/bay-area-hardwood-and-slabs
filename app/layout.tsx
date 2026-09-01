import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bayareahardwoodandslabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bay Area Hardwood & Slabs | Custom Tables, Milling & Lumber",
    template: "%s | Bay Area Hardwood & Slabs",
  },
  description:
    "San Leandro hardwood shop building live-edge tables and milling decking, siding, flooring and trim. Hardwood lumber and slabs for sale. Call 510-813-4952.",
  openGraph: {
    title: "Bay Area Hardwood & Slabs",
    description:
      "Custom live-edge tables, milled decking, siding, flooring and trim, plus hardwood lumber and slabs in San Leandro, CA.",
    type: "website",
    url: siteUrl,
    siteName: "Bay Area Hardwood & Slabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bay Area Hardwood & Slabs",
    description:
      "Custom live-edge tables, milled decking, siding, flooring and trim, plus hardwood lumber and slabs in San Leandro, CA.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
