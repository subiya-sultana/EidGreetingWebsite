import Footer from "@/components/Footer";
import Link from "next/link";

export default function EidSurprise(params) {
    return(
        <>
            <div className="min-h-screen">
                Eid SURPRISE HERE

                <Link href={'/eid-memes'} className="bg-lime-500 text-white hover:opacity-80 px-8 py-2 rounded-full cursor-pointer"> Eid Memes</Link>
            
            </div>
            <Footer/>
        </>
    );
};