import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from 'next/font/google'
 
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Riley Fletcher",
  description: "Riley Fletcher portfolio & blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
