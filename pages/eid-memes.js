import Footer from "@/components/Footer";
import MemeContainer from "@/components/MemeContainer";
import Warning from "@/components/Warning";
import Link from "next/link";

export default function EidMemes() {
    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center relative"
                style={{
                    backgroundImage: "url('/stickers/StarsShine2.gif')",
                    backgroundSize: "350px", // Keeps each star distinct
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",

                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-lime-200 opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-white text-center">
                    <h1 className="text-red text-2xl font-bold my-4">Eid MEMES HERE</h1>
                    <Warning />
                    <div className="flex justify-center">
                        <MemeContainer />
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
            </div>
            <Footer />
        </>
    );
}
