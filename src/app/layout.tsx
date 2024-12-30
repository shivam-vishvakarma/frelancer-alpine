import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/hooks/context/provider";

export const metadata: Metadata = {
  title: "My Site",
  description: "My site description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
