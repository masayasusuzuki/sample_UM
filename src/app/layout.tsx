import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AuthScreen from "@/components/AuthScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNCOVER Marketing｜大阪のSNS運用代行・インフルエンサーPR",
  description:
    "企業の内部課題、顧客の本音、ブランドの未発掘な価値を「UNCOVER」し、本質に基づくマーケティング戦略へと変換します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthScreen>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <FloatingButtons />
        </AuthScreen>
      </body>
    </html>
  );
}
