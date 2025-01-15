import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/hooks/context/provider";
import Modal from "@/components/Modal";

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
          {children}
          <Modal />
        </Provider>
      </body>
    </html>
  );
}
