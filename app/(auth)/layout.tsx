import "../globals.css";
import AuthNavbar from '@/app/_components/AuthNavigation';

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html>
        <body>
          <AuthNavbar />
          {children}
        </body>
      </html>
    );
  }