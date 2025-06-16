import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NeuralArc - AI-Powered Business Intelligence Solutions",
  description: "NeuralArc delivers advanced AI solutions for business intelligence and data analytics. Our products Helium and Dash transform how businesses make decisions through predictive intelligence and real-time analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.className} bg-[#F9F8F4] antialiased`}
      > 
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
