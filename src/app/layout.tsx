import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSC Forms test",
  description: "RSC Forms test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto my-5 max-w-7xl content-center bg-cyan-900 px-10 py-5 text-amber-500`}
      >
        {children}
      </body>
    </html>
  );
}
