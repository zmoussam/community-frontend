import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/navbar/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medium community",
  description:
    "Discover and share inspiring stories on medium.community. Join a vibrant community of bloggers and readers exploring diverse topics across technology, lifestyle, business, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  "  bg-white dark:bg-gray-900`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
