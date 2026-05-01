import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata: Metadata = {
  title: "Kiaan - Pasni",
  description: "Pasni ceremony invitation",
  metadataBase: new URL("https://kiaan-pasni.vercel.app"), // Your live site URL
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Kiaan's Pasni Ceremony",
    description: "Join us to celebrate Kiaan's first rice feeding ceremony",
    images: ["/img2.jpg"],
    type: "website",
    url: "https://kiaan-pasni.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiaan's Pasni Ceremony",
    description: "Join us to celebrate Kiaan's first rice feeding ceremony",
    images: ["/img2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}