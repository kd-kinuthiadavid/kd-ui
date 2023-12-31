import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
// fontawesome config
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KD-UI",
  description: "Design System Created By David Kinuthia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
