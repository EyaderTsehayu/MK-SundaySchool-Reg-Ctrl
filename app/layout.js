import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MKSS SRCS ",
  description:
    "Debreselam Beale Egziabher church Mahiteme Kirstos sunday school student registration and controlling system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
