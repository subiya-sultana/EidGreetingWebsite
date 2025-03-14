import Footer from "@/components/Footer";
import MemeContainer from "@/components/MemeContainer";
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
                    <h1 className="text-3xl font-bold my-4 bounce-top">Halal Laughs Only: Eid Edition!<i className="fi fi-sr-rewind"></i></h1>
                    <Warning />
                    <br/>
                    <div className="flex justify-center w-full">
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
