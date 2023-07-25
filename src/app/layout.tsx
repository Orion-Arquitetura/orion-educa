import AppBar from "@/components/AppBar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Orion Educa",
  description: "Plataforma de educação da Orion Arquitetura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{backgroundImage: "url('/background.png')", backgroundSize: "70%"}}>
          <AppBar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
