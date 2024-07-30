import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pets Club",
  description: "Pagina para organizar el trabajo y el stock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
