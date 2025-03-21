/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"; 
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Greeting() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username") || "Guest";

    const [text, setText] = useState("");
    const fullText = `✨🌙 Wishing you a joyous Eid filled with love 💖, laughter, and endless blessings 🤲🏼🌟. May your home 🏡 be filled with warmth 🔥, your heart ❤️ with peace, your days with happiness 😍🎉, and your blessings be countless 💌💫.  

    💕💕 May your plate overflow with biryani 🍛 and your sheer khurma 🍮 never spill, keeping your Eid outfit spotless! ✨👕 May your WiFi 📶 be strong, your phone battery 🔋 last all day, and your Eid selfies 📸💯 be absolute fire! 🔥🔥 And most importantly, may you receive unlimited Eidi... but first, hand over mine! 😜💰 So... where is my Eidi?`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [ ]);

    return (
        <>
            <div className="min-h-screen w-full flex flex-col items-center justify-between relative"
                style={{
                    backgroundImage: "url('/Images/MemeBackground.png'), url('/stickers/fireworks2.gif')",
                    backgroundBlendMode: "overlay",
                    backgroundSize: "cover, 350px",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                }}
            >
                {/* Background Overlay */}
                <div className="absolute w-full h-full bg-lime-200 opacity-42"></div>

                {/* Laterns animations */}
                <div
                    className="relative top-0 z-8 w-full overflow-hidden"
                    style={{
                        backgroundImage: "url('/stickers/lantern1.gif')",
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "150px auto",
                        backgroundPosition: "center -15px",
                        height: "auto",
                        minHeight: "120px",
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 text-center w-full px-2 py-4 rounded-lg">
                    {/* Eid Mubarak Sticker */}
                    <div className="flex justify-center">
                        <img
                            src="/stickers/EidMubarak1.gif"
                            alt="Eid Mubarak"
                            className="w-full max-w-fit h-auto drop-shadow-lg"
                        />
                    </div>
                    {/* Eid Message */}
                    <div className="flex justify-center items-center my-2">
                        <div className="rounded-2xl bg-lime-200 sm:w-2/3 sm:text-center p-6 shadow-lg">
                            <h1 className="text-4xl font-bold text-rose-600 mb-3 bounce-top">Hello, {username}!</h1>
                            <p className="text-xl text-rose-500 mt-4 sm:px-4 leading-relaxed tracking-wider font-bold font-emilys-candy whitespace-pre-line">{text}</p>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                

                <div className="flex flex-col sm:flex-row gap-4 my-6">
                    <Link href="/eid-memes" prefetch={false} className="group">
                        <span className="cursor-pointer bg-gradient-to-r from-green-500 to-lime-400 text-white px-6 py-3 text-lg font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 block text-center">
                            Eid Memes 🎭
                        </span>
                    </Link>

                    <Link href="/eid-surprise" prefetch={false} className="group">
                        <span className="cursor-pointer bg-gradient-to-r from-yellow-500 to-amber-400 text-white px-6 py-3 text-lg font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 block text-center">
                            Your Eid Surprise 🎁
                        </span>
                    </Link>

                </div>

                <div className="p-4 border-2 border-red-400 mt-4">
                    <Link
                        href="/eid-surprise"
                        className="bg-lime-500 text-white hover:opacity-80 px-8 py-2 rounded-full cursor-pointer"
                    >
                        Your Eid Surprise !!
                    </Link>
                </div>                



            </div>
            <Footer />
        </>
    );
};
