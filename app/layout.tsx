import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "Signal402 - Advanced Trading Signals",
  description:
    "Get premium trading signals with advanced analytics, real-time market insights, and expert recommendations for cryptocurrency trading on DEX platforms.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",

  // Open Graph metadata for link previews
  openGraph: {
    title: "Signal402 - Advanced Trading Signals",
    description:
      "Get premium trading signals with advanced analytics, real-time market insights, and expert recommendations for cryptocurrency trading on DEX platforms.",
    type: "website",
    url: "https://app.signal402.xyz", // Update with your actual domain
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Signal402 - Advanced Trading Signals",
      },
    ],
    siteName: "Signal402",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Signal402 - Advanced Trading Signals",
    description:
      "Get premium trading signals with advanced analytics, real-time market insights, and expert recommendations for cryptocurrency trading on DEX platforms.",
    images: ["/images/logo.png"],
    creator: "@signal402_xyz", // Update with your actual Twitter handle
  },

  // Additional metadata
  keywords: [
    "trading signals",
    "cryptocurrency",
    "DEX",
    "trading tips",
    "market analysis",
    "crypto trading",
    "blockchain",
  ],
  authors: [{ name: "Signal402 Team" }],
  creator: "Signal402",
  publisher: "Signal402",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
