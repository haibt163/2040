import type { Metadata } from "next";
import { Newsreader, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { story } from "@/content/story";
import "./globals.css";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// English reading text and the hero title. Noto Serif JP stays for Japanese glyphs.
const text = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: "normal",
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${story.title} — 2040`,
  description: story.dek,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sans.variable + " " + serif.variable + " " + text.variable}>{children}</body>
    </html>
  );
}
