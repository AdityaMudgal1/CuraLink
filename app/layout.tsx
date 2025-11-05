// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast"; // ✅ Added for toast notifications

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CuraLink | AI Clinical Discovery",
  description: "Connect patients, researchers, and experts — CuraLink MVP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[calc(100vh-120px)]">{children}</div>
        <Footer />
        <Toaster position="top-center" /> {/* ✅ Global Toast Provider */}
      </body>
    </html>
  );
}
