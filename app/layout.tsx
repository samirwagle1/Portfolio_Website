import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samir Wagle | Portfolio",
  description: "Personal Portfolio Website created by Samir Wagle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 relative min-h-screen pt-28 sm:pt-36`}>
        <div className="bg-cover bg-[#ffcef8] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"> </div>

        <div className="bg-cover bg-[#dcfaff] absolute -z-10 top-[-1rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"> </div>

        <Header />
        {children}
      </body>
    </html>
  );
}
