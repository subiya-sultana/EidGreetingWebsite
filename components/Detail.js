"use client"; // Needed for Next.js App Router hooks

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";

export default function Detail() {
   const router = useRouter();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [loading, setLoading] = useState(false);

   const AddUser = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await axios.post("/api/users", { username: name, email });
         console.log(res.data)
         // Navigate to Greeting page only if status is 201 (Created)
         if (res.status === 201) {
            router.push(`/Greeting?username=${encodeURIComponent(name)}`);
         }
      }
      catch (error) {
         alert("Error: " + (error.response?.data?.message || "Something went wrong"));
      }
      finally {
         setLoading(false);
      }

   };

   return (
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
         <div className="absolute w-full h-full bg-lime-200 opacity-50 pointer-events-none"></div>

         {/* window */}
         <div className="z-10 w-full sm:w-2/3 md:w-1/2 m-auto px-3">

            <div className="my-auto text-center border-2 border-rose-700 rounded-xl shadow-xl bg-gradient-to-b from-rose-300 to-rose-200 overflow-hidden" >
               
               {/* Title bar */}
               <div className="flex justify-between items-center bg-rose-300 px-4 py-2 rounded-t-xl border-b border-rose-700 shadow-md">
                  {/* Left - File Icon & Name */}
                  <div className="flex items-center space-x-2">
                     <i className="fi fi-rr-file-code text-rose-900"></i>
                     <p className="text-rose-900 font-semibold text-xl sm:text-2xl">Welcome.js</p>
                  </div>

                  {/* Right - Window Buttons */}
                  <div className="flex space-x-2">
                     <div className="w-7 h-6 flex items-center justify-center bg-rose-800 rounded-md shadow-md hover:bg-rose-700 transition-all">
                        <i className="fi fi-rr-window-minimize text-white text-sm"></i>
                     </div>
                     <div className="w-7 h-6 flex items-center justify-center bg-rose-800 rounded-md shadow-md hover:bg-rose-700 transition-all">
                        <i className="fi fi-rr-window-restore text-white text-sm"></i>
                     </div>
                     <div className="w-7 h-6 flex items-center justify-center bg-rose-800 rounded-md shadow-md hover:bg-rose-700 transition-all">
                        <i className="fi fi-rr-rectangle-xmark text-white text-sm"></i>
                     </div>
                  </div>
               </div>
            

               <div className="border-2 border-rose-700 m-4 rounded-lg">
                  {/* Form Content */}
                  <form onSubmit={AddUser} className="relative flex flex-col items-center gap-4 p-3 sm:p-6 rounded-lg w-full">
                     <input
                        className="border-2 border-rose-300 bg-rose-200 p-2 rounded w-full focus:outline-rose-400"
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                     />
                     <input
                        className="border-2 border-rose-300 bg-rose-200 p-2 rounded w-full focus:outline-rose-400"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                     <button
                        type="submit"
                        disabled={loading}
                        className={`bg-rose-500 text-white hover:opacity-80 px-8 py-2 rounded-md cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                     >
                        {loading ? "Submitting..." : "Proceed.."}
                     </button>
                  </form>
               </div>

            </div>

         </div>

      </div>
   );
}
