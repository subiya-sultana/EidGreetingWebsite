import Footer from "@/components/Footer";
import MemeContainer from "@/components/MemeContainer";
import MyButton from "@/components/MyButton";
import Warning from "@/components/Warning";
import Link from "next/link";

export default function EidMemes() {
    return (
        <>
            <div
                className="min-h-screen w-full flex flex-col items-center justify-center relative"
                style={{
                    backgroundImage: "url('/stickers/StarsShine2.gif')",
                    backgroundSize: "350px",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                }}
            >
                {/* Background Overlay */}
                <div className="absolute w-full h-full bg-lime-200 opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-rose-600 text-center w-full px-4">
                    <h1 className="text-3xl font-bold my-4 bounce-top">Halal Laughs Only: Eid Edition!</h1>
                    <Warning title="Warning:" message="These memes may cause uncontrollable giggles, nostalgic Eid memories, sudden urge to tag your cousins, and deep reflections on how little Eidi you actually got."  />
                    
                    <br/>

                    <div className="flex justify-center w-full">
                        <MemeContainer />
                    </div>

                    {/* Buttons */}
                    <div className="mx-auto w-full flex flex-col sm:flex-row gap-4 my-10 mb-14 justify-center items-center text-center">
                        {/* <MyButton BtnName="Eid Memes 😆" ReferTo="/eid-memes" /> */}
                        <MyButton BtnName="Eid Greeting ✨🌙" ReferTo="/Greeting" />
                        <MyButton BtnName="Your Eid Surprise 🎁" ReferTo="/eid-surprise" />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
