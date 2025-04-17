import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { cn } from "@/lib/utils";
import { universityName } from "@/constants/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: universityName
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          'min-h-screen font-sans antialiased',
          inter.className
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange 
            >
              {children}
          </ThemeProvider>
     </body>
    </html>
  );
}
