import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mayjjana Restaurant & Lounge | Burlington, ON",
  description:
    "Middle Eastern cuisine & luxury shisha lounge in Burlington. Fresh plates, manakish, desserts, juices, and premium lounge vibes.",
  openGraph: {
    title: "Mayjjana Restaurant & Lounge",
    description: "Middle Eastern cuisine & luxury lounge in Burlington, ON.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pattern">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
