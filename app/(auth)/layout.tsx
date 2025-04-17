import { cn } from "@/lib/utils";
import "../globals.css";
import AuthNavbar from '@/app/_components/AuthNavigation';

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" className="light">
        <body className={cn(
          'min-h-screen font-sans antialiased',
        )}>
            <AuthNavbar />
            {children}
        </body>
      </html>
    );
  }