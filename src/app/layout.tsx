import type { Metadata } from "next";
import "./globals.css";
import ContextProvider from "@/lib/hooks/context/contextProvider";
import Modal from "@/components/Modal";
import { AuthLoader } from "@/components/common/AuthLoader";
import { Loader } from "@/components/ui/atoms/Loader";

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
        <ContextProvider>
          <AuthLoader>
            {children}
            <Modal />
            <Loader />
          </AuthLoader>
        </ContextProvider>
      </body>
    </html>
  );
}
