import "@/styles/globals.css";
import { Emilys_Candy, Geist_Mono } from "next/font/google";
import Head from "next/head";

const emilysCandy = Emilys_Candy({
  variable: "--font-emilys-candy",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/gif" href="/stickers/favicon.gif" />
      </Head>
      <div className={`${emilysCandy.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
