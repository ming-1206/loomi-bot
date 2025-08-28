import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-robotic",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loomi – AI-Powered Loyalty Agent",
  description:
    "Loomi helps you maximize your Grab, Shopee, Lazada, and other reward points by consolidating them into one on-chain dashboard, recommending the smartest redemptions, and auto-redeeming before they expire.",
  metadataBase: new URL("https://loomi.ai"), // update with your real domain later
  openGraph: {
    title: "Loomi – AI-Powered Loyalty Agent",
    description:
      "Stop losing reward points. Loomi consolidates balances, recommends smart redemptions, and auto-redeems across Grab, Shopee, Lazada, and more.",
    type: "website",
    url: "https://loomi.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loomi – AI-Powered Loyalty Agent",
    description:
      "Maximize your reward points across Grab, Shopee, Lazada & more. Loomi tracks, consolidates, and auto-redeems before they expire.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
