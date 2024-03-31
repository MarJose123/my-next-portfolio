/*
 * Implemented by JND
 * Copyright (c) 2024.
 */

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio - Josie Darang",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased bg-slate-200 dark:bg-slate-800 font-sans`}>
    <Analytics/>
    {children}
    </body>
    </html>
  );
}
