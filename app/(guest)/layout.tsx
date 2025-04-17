import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { companyName, universityName } from "@/constants/app";
import Navbar from "@/app/(guest)/_components/Navbar/Navbar";
import Footer from "@/app/(guest)/_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: universityName,
  description: companyName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen font-sans antialiased',
        inter.className
      )}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}