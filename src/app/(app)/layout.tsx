import type { Metadata } from "next";
import "../globals.css";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const metadata: Metadata = {
  title: "UrbanCut",
  description: "Landing Page Barber UrbanCut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased font-sans bg-preto-100 flex flex-col min-h-full ">
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
