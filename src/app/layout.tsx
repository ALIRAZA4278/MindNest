import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindBridge - Anonymous Therapy & Mental Health Support",
  description:
    "Connect anonymously with certified therapists through chat or voice. Safe, private, judgment-free mental health support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-slate-800 font-sans">
        {children}
      </body>
    </html>
  );
}
