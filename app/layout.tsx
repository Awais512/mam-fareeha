import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Great_Vibes,
  Inter,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Mam Fareeha — A Tribute From The Timeline",
  description:
    "A small tribute to Dr. Mam Fareeha — PhD, English Literature professor, and the most legendary roaster on the timeline. Happy Birthday, Mam.",
  keywords: [
    "Dr. Fareeha",
    "PhD",
    "English teacher",
    "roaster",
    "Twitter",
    "birthday",
    "tribute",
    "university professor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
