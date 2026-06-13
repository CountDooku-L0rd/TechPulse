import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Страница со всеми статьями",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
          <main className='px-6 py-3'>
            {children}
          </main>
        </div>
      <Footer/>
      </body>
    </html>
  );
}
