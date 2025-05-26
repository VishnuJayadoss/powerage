import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header/page";
import Footer from "./Footer/page";
import { DM_Sans } from 'next/font/google'
import { EmailProvider } from '../context/EmailContext';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
})

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
        className={`${dmSans.variable} antialiased`}
      >
        <Header />
        <EmailProvider>
          {children}
        </EmailProvider>
        <Footer />
      </body>
    </html>
  );
}
