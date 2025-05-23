import "../globals.css";
import Navbar from "@/app/(guest)/_components/Navbar/Navbar";
import Footer from "@/app/(guest)/_components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}