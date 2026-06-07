import Footer from "@/components/shared/app/footer/Footer";
import Navbar from "@/components/shared/app/navbar/Navbar";

export default async  function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html>
          <body>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
    );
  }