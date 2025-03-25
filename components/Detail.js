// This component will get username and email and save it on MongoDb
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Detail() {
   const router = useRouter();
   const [formData, setFormData] = useState({ name: "", email: "" });
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const AddUser = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await axios.post("/api/users", {
            username: formData.name,
            email: formData.email.toLowerCase()
         });

         console.log(res.data);
         if (res.status === 200 || res.status === 201) {
            router.push(`/Greeting?username=${encodeURIComponent(formData.name)}`);
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
            backgroundImage: "url('/stickers/StarsShine.gif')",
            backgroundSize: "350px",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
         }}
      >
         <div className="absolute w-full h-full bg-lime-200 opacity-50 pointer-events-none"></div>

         <div className="z-10 w-full sm:w-2/3 md:w-1/2 m-auto px-3">
            <div className="my-auto text-center border-2 border-rose-700 rounded-xl shadow-xl bg-gradient-to-b from-rose-300 to-rose-200 overflow-hidden">

               {/* Title Bar */}
               <div className="flex justify-between items-center bg-rose-300 px-4 py-2 rounded-t-xl border-b border-rose-700 shadow-md">
                  <div className="flex items-center space-x-2">
                     <i className="fi fi-rr-file-code text-rose-900"></i>
                     <p className="text-rose-900 font-semibold text-xl sm:text-2xl">Welcome.js</p>
                  </div>
                  <div className="flex space-x-2">
                     {["window-minimize", "window-restore", "rectangle-xmark"].map((icon, index) => (
                        <div key={index} className="w-7 h-6 flex items-center justify-center bg-rose-800 rounded-md shadow-md hover:bg-rose-700 transition-all">
                           <i className={`fi fi-rr-${icon} text-white text-sm`}></i>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Form */}
               <div className="border-2 border-rose-700 m-4 rounded-lg">
                  <form onSubmit={AddUser} className="relative flex flex-col items-center gap-4 p-3 sm:p-6 rounded-lg w-full">
                     <input
                        className="border-2 border-rose-300 bg-rose-200 p-2 rounded w-full focus:outline-rose-400"
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                     />
                     <input
                        className="border-2 border-rose-300 bg-rose-200 p-2 rounded w-full focus:outline-rose-400"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />
                     <button
                        type="submit"
                        disabled={loading}
                        className={`bg-rose-500 text-white hover:opacity-80 px-8 py-2 rounded-md cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                     >
                        {loading ? "Submitting..." : "Proceed"}
                     </button>
                  </form>
               </div>

            </div>
         </div>
      </div>

   );
}
