import Footer from "@/components/Footer";
import MemeContainer from "@/components/MemeContainer";
import MyButton from "@/components/MyButton";
import Warning from "@/components/Warning";
import Head from "next/head";
import { useUser } from "./_app"; 

export default function EidMemes() {
    const { user, loading } = useUser();

    return (
        <>
            <Head>
                <title>Eid Memes</title>
                <meta name="description" content="Halal laughs only" />
            </Head>

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
                <div className="absolute w-full h-full bg-lime-200 opacity-30 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 text-rose-600 text-center w-full px-4">
                    <h1 className="text-3xl font-bold my-4 bounce-top drop-shadow-[1px_2px_0px_#4b5563] tracking-widest">
                        Halal Laughs Only: Eid Edition!
                    </h1>

                    {/* Display user details */}
                    <div className="text-lg text-gray-700 mt-4">
                        {loading ? (
                            <p>Loading user data...</p>
                        ) : user ? (
                            <div className="bg-rose-100 border-2 border-rose-400 p-4 rounded-lg shadow-md">
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Visit Count:</strong> {user.visitCount}</p>
                                <p><strong>Usernames:</strong> {user.usernames.join(", ")}</p>
                            </div>
                        ) : (
                            <p>No user found.</p>
                        )}
                    </div>

                    <Warning 
                        title="Warning:" 
                        message="These memes may cause uncontrollable giggles, nostalgic Eid memories, sudden urge to tag your cousins, and deep reflections on how little Eidi you actually got."  
                    />
                    
                    <br/>

                    <div className="flex justify-center w-full">
                        <MemeContainer />
                    </div>

                    {/* Buttons */}
                    <div className="mx-auto w-full flex flex-col sm:flex-row gap-4 my-10 mb-14 justify-center items-center text-center">
                        <MyButton BtnName="Eid Greeting ✨🌙" ReferTo="/Greeting" />
                        <MyButton BtnName="Your Eid Surprise 🎁" ReferTo="/eid-surprise" />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
