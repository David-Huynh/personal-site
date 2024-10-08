import type { Metadata } from "next";
import "./globals.css";
import { MainCanvas } from "./components/three/mainCanvas";



export const metadata: Metadata = {
  title: "David Huynh",
  description: "David Huynh's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="w-full h-full">
        {children}
        <MainCanvas/>
      </body>
    </html>
  );
}
