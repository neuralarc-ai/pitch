import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/client-layout";

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NeuralArc - AI-Powered Business Intelligence Solutions",
  description: "NeuralArc delivers advanced AI solutions for business intelligence and data analytics. Our products Helium and Dash transform how businesses make decisions through predictive intelligence and real-time analytics.",
};

// Move client logic to a wrapper
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fustat.className} bg-[#F9F8F4] antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
