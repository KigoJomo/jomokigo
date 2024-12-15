import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Jomo Kigo | Software Developer",
  description: "Meet Jomo Kigo, a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen h-screen overflow-hidden">
      <body className="w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar-hidden flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
