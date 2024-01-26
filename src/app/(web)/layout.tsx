import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/theme-provider";
import NextAuthProvider from "@/components/auth-provider";
import Toast from "@/components/toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Candido Hotel",
  description: "O melhor hotel ficticio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <Header />
            <main className="font-normal">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
