import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "iWebDotCom — We Build. We Design. We Grow.",
  description:
    "Your digital partner for websites, e-commerce and web security — built fast, built right, built for results. Serving small businesses, architects, restaurants, clinics and entrepreneurs across Portugal.",
  keywords: [
    "web design Portugal",
    "website creation",
    "e-commerce",
    "web agency Portugal",
    "iWebDotCom",
    "web development",
    "SEO Portugal",
  ],
  authors: [{ name: "iWebDotCom", url: "https://iwebdotcom.pt" }],
  openGraph: {
    title: "iWebDotCom — We Build. We Design. We Grow.",
    description:
      "Your digital partner for websites, e-commerce and web security — built fast, built right, built for results.",
    type: "website",
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "iWebDotCom — We Build. We Design. We Grow.",
    description:
      "Your digital partner for websites, e-commerce and web security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
