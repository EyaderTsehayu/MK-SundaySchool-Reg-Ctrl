import { Poppins } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "MKSS SRCS ",
  description:
    "Debreselam Beale Egziabher church Mahiteme Kirstos sunday school student registration and controlling system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
