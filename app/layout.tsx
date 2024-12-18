import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anonymous Instagram Stories Viewer | View & Download",
  description: "Explore Instagram Stories, Reels, and Profiles Anonymously. No login Required. Use the Best Anonymous Instagram Stories Viewer for Free Today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-GB14WEQ3YV"></script> */}
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-GB14WEQ3YV');
        </script> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GB14WEQ3YV"
          strategy="afterInteractive" // Ensures script loads after the page becomes interactive
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GB14WEQ3YV');
          `}
        </Script>

        <meta name="google-site-verification" content="EcAb9EWWuGkDE4PVlXv7SbRRgBYbOIkPEcfQIJPo_Uk" />

      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
