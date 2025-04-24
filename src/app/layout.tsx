import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header/page";
import Footer from "./Footer/page";

export const metadata: Metadata = {
  title: "Powerage Performance",
  description: "Powerage Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
