"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import MyButton from "@/components/MyButton";
import Warning from "@/components/Warning";
import Head from "next/head";

export default function EidSurprise() {
    const [name, setName] = useState("");
    const [fullMessage, setFullMessage] = useState(""); 
    const [typedMessage, setTypedMessage] = useState("");
    const [withdrawn, setWithdrawn] = useState(false);

    const responses = [
        "💸 Eidi transfer in progress… please wait… still waiting… okay, let's be real, it's never happening. 😆 Move on before this ATM starts charging you rent!",

        "🎉 Congratulations! You have successfully withdrawn… ₹0.00. Because life is unfair, and I'm not a charity... 😜 Better luck next Eid!",

        "⚠️ ERROR: Eidi distribution system has crashed due to extreme demand... Our engineers (aka me 😎) estimate a fix by the year 2050. Until then, accept my best wishes.😌",

        "📉 Bank statement update: Not only did you NOT receive Eidi, but you now owe me Eidi instead!🤪 Please clear your dues before the next Eid. 😈 Interest rates may apply.",

        "🔍 Processing… scanning… analyzing… ERROR 404: Eidi Not Found. Did you really think this was going to work? Cute, but no. 🤡😂",

        "❌ Transaction Denied!.... Reason: The universe has other plans for you, and none of them involve receiving money. 🤡😂 But hey, you are rich in hopes and dreams, right?",

        "🚫 Your transaction has been denied due to excessive greed! 🤑 Please lower your expectations and try again next year.",

        "🤩 Eidi successfully sent! But… due to a small technical glitch, it has been redirected to my account instead of yours. 😌 Don't worry, I'll spend it wisely (on snacks).",

        "💰 Want Eidi? Step 1: Get a job. Step 2: Accept reality. Step 3: Stop expecting free money. Congratulations, you are now financially independent and you don't need eidi💀", 
        
        "😑 Aren't you ashamed? You are supposed to give me Eidi,🙄 not the other way around! Reverse transaction initiated 😝 - Now be a good person and hand over mine instead.🤑",

        "❌ ATM error: You are too grown up, Now you are officially on the  ( should be giving Eidi ) list.🧧 No withdrawals, only deposits allowed.... Please redirect funds to ME instead!🤪"
    ];

    const withdrawEidi = () => {
        if (!name.trim()) {
            setFullMessage(" ⚠️ ATM ERROR: Please enter your name before requesting Eidi!");
            setWithdrawn(true);
            return;
        }
        const randomResponse = responses[Math.floor(Math.random() * responses.length)] || "";
        setFullMessage( `Heeyy ${name},<br/>${randomResponse}`);
        setWithdrawn(true);
    };

    const resetATM = () => {
        setName("");
        setFullMessage("");
        setTypedMessage("");
        setWithdrawn(false);
    };

    useEffect(() => {
        setTypedMessage(""); 
        if (!fullMessage) return;
    
        let index = 0;
        const interval = setInterval(() => {
            setTypedMessage((prev) => prev + (fullMessage[index] || "")); 
            index++;
            if (index >= fullMessage.length) clearInterval(interval); 
        }, 100);
    
        return () => clearInterval(interval);
    }, [fullMessage]);
    

    return (
        <>
            <Head>
                <title>Eid Surprise For You</title>
                <meta name="description" content="The ultimate eid surprise for you" />
            </Head>

            <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
                style={{
                    backgroundImage: "url('/stickers/MoneyRain.gif')",
                    backgroundSize: "350px",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                }}
            >
                {/* Background Overlay */}
                <div className="absolute w-full h-full bg-lime-200 opacity-75 pointer-events-none"></div>

                <div className="z-10">
                    <h1 className="text-3xl font-bold my-4 bounce-top drop-shadow-[1px_2px_0px_#4b5563] tracking-widest">🎉 Eidi ATM Machine - The Ultimate Eid Surprise! 🎁</h1>
                    <Warning title="BE AWARE:" message="💸This ATM has a mind of its own,🤯 and generosity is not in its programming!😏 Nor in the programmer!😎 Go on, try your luck and see what happens! 😉" />
                

                    <div className="relative w-full max-w-sm h-[550px] my-6 sm:my-10 mx-auto bg-gradient-to-b from-rose-300 to-rose-200 rounded-xl p-4 pt-6 flex flex-col items-center border-4 border-rose-400 shadow-md shadow-rose-500">
                        <div className="w-full h-1/2 bg-gray-100 rounded-lg text-center flex flex-col justify-center border-[3px] border-gray-300 shadow-md shadow-gray-400 overflow-hidden font-geist-mono p-3 relative">
                            {!fullMessage ? (
                                <div className="p-3">
                                    <p className="text-base sm:text-lg text-gray-700 font-semibold">Welcome to Eidi ATM!</p>
                                    <input 
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Your Name"
                                        className="text-base sm:text-lg mt-2 px-3 py-2 w-full border border-rose-300 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-rose-300"
                                    />
                                </div>
                            ) : (
                                <div className="overflow-y-auto h-full flex items-center justify-center text-center">
                                    <p className="text-sm sm:text-base font-semibold text-gray-800" dangerouslySetInnerHTML={{ __html: typedMessage }}></p>
                                </div>
                            )}
                        </div>

                        {/* Container */}
                        <div className="flex flex-row items-center justify-center gap-6 border-2 border-rose-300 bg-rose-200 shadow-inner shadow-rose-300 mt-5 w-full py-3 rounded-md">

                            {/* Dummy Buttons Below ATM Screen */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex flex-col justify-center bg-rose-300 rounded-md px-3 py-1">
                                    <div className="flex gap-1 p-1 rounded-md">
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                    </div>
                                    <div className="flex gap-1 p-1 rounded-md">
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                    </div>
                                    <div className="flex gap-1 p-1 rounded-md">
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                        <div className="w-6 h-4 bg-rose-400 border border-rose-700 rounded-md shadow-md"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Money Slot */}
                            <div className="flex justify-center mt-6">
                                <div className="relative w-36 h-10 bg-rose-400 rounded-md border border-rose-700 shadow-md">
                                    <div className="absolute inset-1 w-32 h-6 m-auto bg-gradient-to-b from-rose-300 to-rose-400 rounded-md border border-rose-600 shadow-inner"></div>
                                </div>
                            </div>

                        </div>

                        {/* Widraw and try again button here */}
                        <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4 w-auto">
                            {!withdrawn ? (
                                <button 
                                    onClick={withdrawEidi}
                                    className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 bg-rose-500 text-white text-base sm:text-lg font-bold rounded-md shadow-md transition-all duration-300 hover:scale-105 w-full"
                                >
                                    Withdraw Eidi 💰
                                </button>
                            ) : (
                                <button 
                                    onClick={resetATM}
                                    className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 bg-rose-600 text-white text-base sm:text-lg font-bold rounded-md shadow-md transition-all duration-300 hover:scale-105 w-full"
                                >
                                    Try Again 💱
                                </button>
                            )}
                        </div>
                    </div>


                    <div className="mx-auto w-full flex flex-col sm:flex-row gap-4 my-10 mb-14 justify-center items-center text-center">
                        <MyButton BtnName="Eid Memes 😆" ReferTo="/eid-memes" />
                        <MyButton BtnName="Eid Greeting ✨🌙" ReferTo="/Greeting" />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}
