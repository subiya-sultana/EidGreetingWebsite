import Image from "next/image";
import Detail from "@/components/Detail";
import Footer from "@/components/Footer";
import Disclamer from "@/components/Disclamer";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <Head>
        <title>Eid Mubarak - Welcome</title>
        <meta name="description" content="Welcome to my website!" />
      </Head>

      <div className="font-emilys-candy">

        {/* Passing function to Disclamer */}
        <Disclamer setIsVisible={setIsVisible} />

        {/* Showing Detail only when isVisible is false */}
        { !isVisible && <Detail /> }

        <Footer />

      </div>
    </>
  );
}
