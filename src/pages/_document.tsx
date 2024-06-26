import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-slate-200 dark:bg-slate-800">
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
