import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "CrewHQ - Build Your Creator Crew",
  description: "The AI-powered platform that helps brands find their perfect ambassadors and creators monetize their influence.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://crewhq.com'),
  openGraph: {
    title: "CrewHQ - Build Your Creator Crew",
    description: "The AI-powered platform for ambassador marketing. No minimums. No contracts. Just results.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
