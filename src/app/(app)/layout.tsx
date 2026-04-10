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
    <html lang="en">
      <body className="antialiased ">
        <div className="font-sans bg-preto-100 flex flex-col min-h-screen relative">

          <Header />
          <main className="flex flex-col flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html >
  );
}
