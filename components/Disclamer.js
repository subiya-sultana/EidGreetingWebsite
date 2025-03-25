import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Disclaimer({ setIsVisible }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseDisclamer = () => {
        setIsOpen(false);
        setIsVisible(false);
    };
    if (!isOpen) return null;

    return (
        <div
            className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 py-10"
            style={{
                backgroundImage: "url('/Images/Square-bg.png')",
                backgroundSize: "800px",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
            }}
        >
            {/* Lime Overlay */}
            <div className="absolute w-full h-full bg-lime-300 opacity-60 pointer-events-none"></div>

            {/* Sticky Note Effect */}
            <div className="z-10 relative bg-rose-200 border-4 border-rose-300 p-6 rounded-xl shadow-lg shadow-rose-400 w-full sm:w-2/3 text-center">
                <img
                    src="/stickers/StarTape.gif"
                    alt="Taped Note"
                    className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-44 rotate-2"
                />
                <h1 className="text-3xl font-bold mb-4 drop-shadow-[1px_2px_0px_#4b5563] tracking-widest text-rose-700 bounce-top">🚨 DISCLAIMER! This site contains:</h1>

                <ul className="list-none space-y-2 text-rose-900 font-medium m-auto text-lg text-left">
                    <li className="flex items-start gap-2">
                        <img src="/stickers/star.gif" alt="bullet" className="w-6 h-6" />
                        Excessive AWESOMENESS 😎 ( Side effects: laughter & excessive clicking. 🖱️ )
                    </li>
                    <li className="flex items-start gap-2">
                        <img src="/stickers/star.gif" alt="bullet" className="w-6 h-6" />
                        Too many GIFs, animations & emojis 🔥 ( Why settle for one when you can have fifty? 🤩 )
                    </li>
                    <li className="flex items-start gap-2">
                        <img src="/stickers/star.gif" alt="bullet" className="w-6 h-6" />
                        Autoplay does not ask permission 😌 ( Due to this pages may take forever to load. 🛠️ )
                    </li>
                    <li className="flex items-start gap-2">
                        <img src="/stickers/star.gif" alt="bullet" className="w-6 h-6" />
                        3 AM Decisions ⏳ ( Runs on ✨hope✨ & questionable code. Breaks? It is a feature. 👨‍💻 )
                    </li>
                    <li className="flex items-start gap-2">
                        <img src="/stickers/star.gif" alt="bullet" className="w-6 h-6" />
                        Silly Sound Effects 🔊 ( Because silence is boring—so am I. 🤡 )
                    </li>
                    <li className="flex items-start gap-2">
                        <img src="/stickers/star.gif" alt="bullet" className="w-6 h-6" />
                        100% Fun, 0% Professionalism 🎭 ( Looking for serious? Wrong turn. Too late now. 😂 )
                    </li>
                </ul>

                <button className="bg-rose-500 cursor-pointer px-2 py-1 mt-4 rounded-xl shadow-md transform hover:scale-105 transition" onClick={handleCloseDisclamer}>
                    <img src="/stickers/startBtn.gif" alt="Start" className="w-28 max-w-fit h-auto drop-shadow-lg" />
                </button>
            </div>
        </div>
    )
}
