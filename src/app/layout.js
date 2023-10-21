import "./globals.scss";
import { Inter } from "next/font/google";
import { AOSInit } from "../config/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nike",
  description: "Nike Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
