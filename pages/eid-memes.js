import Footer from "@/components/Footer";
import Link from "next/link";

export default function EidMemes(params) {
    return(
        <>
            <div className="min-h-screen">
                Eid MEMES HERE



                <Link href={'/eid-surprise'} className="bg-lime-500 text-white hover:opacity-80 px-8 py-2 rounded-full cursor-pointer">Your Eid Surprise !!</Link>
            </div>
            <Footer/>
        </>
        
    );
};
