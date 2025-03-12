import Image from "next/image";
import { Emilys_Candy, Geist_Mono } from "next/font/google";
import Detail from "@/components/Detail";
import Footer from "@/components/Footer";

const emilysCandy = Emilys_Candy({
  variable: "--font-emilys-candy",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${emilysCandy.variable} ${geistMono.variable} font-[family-name:var(--font-emilys-candy)]`}
    >
      <Detail />
      <Footer/>
    </div>
  );
}
