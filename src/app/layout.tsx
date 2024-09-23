import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/footer/Footer";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Header from "@/components/navbar/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medium community",
  description:
    "Discover and share inspiring stories on medium.community. Join a vibrant community of bloggers and readers exploring diverse topics across technology, lifestyle, business, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (session && session.user)
    return (
      <html lang="en">
        <body className={`${inter.className}  "  bg-[#F1F1F1] dark:bg-black`}>
          <ThemeProvider attribute="class">
            <Providers>
              <Header />
              {children}
              {/* <Footer /> */}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    );

  return (
    <html lang="en">
      <body className={`${inter.className}  "  bg-[#F1F1F1] dark:bg-black`}>
        <ThemeProvider attribute="class">
          <Providers>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
