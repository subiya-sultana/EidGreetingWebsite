import Image from "next/image";
import Detail from "@/components/Detail";
import Footer from "@/components/Footer";
import Disclamer from "@/components/Disclamer";

export default function Home() {
  return (
    <div className="font-emilys-candy">
      <Disclamer />
      <Detail />
      <Footer />
    </div>
  );
}
