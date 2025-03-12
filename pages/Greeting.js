"use client"; 
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Greeting() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username") || "Guest";

    return(
        <>
            <div className="min-h-screen">
                <h1>Hello ....{username}...</h1>
                <h1>Eid Mubarak</h1>
                <p className="text-sm">May your plate overflow with biryani and your sheer khurma never spill, keeping your Eid outfit spotless! 🍛🍨 May your WiFi be strong, your phone battery last all day, and your Eid selfies be absolute fire! 📸🔥 And most importantly, may you receive unlimited Eidi... but first, hand over mine! 😜💸 So... where's my Eidi?</p>
                <div className="border-2 border-amber-950 py-6"> 
                    <Link href={'/eid-memes'} className="bg-lime-500 text-white hover:opacity-80 px-8 py-2 rounded-full cursor-pointer"> Eid Memes</Link>
                    <Link href={'/eid-surprise'} className="bg-lime-500 text-white hover:opacity-80 px-8 py-2 rounded-full cursor-pointer">Your Eid Surprise !!</Link>
                </div>
            </div>
            <Footer />
        </>
    );
};
