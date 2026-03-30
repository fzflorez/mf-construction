import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MF | Construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
