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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 border-2 border-amber-800">
      {/* Background Image */}
      <Image 
        src="/Images/Square-bg.png" // Add a leading slash
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0"
      />

      {/* Lime Overlay */}
      <div className="absolute inset-0 bg-lime-500 opacity-60"></div>

      {/* Form Content */}
      <form onSubmit={AddUser} className="relative flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2">
        <input 
          className="border-2 border-gray-300 p-2 rounded w-full focus:outline-lime-500" 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <input 
          className="border-2 border-gray-300 p-2 rounded w-full focus:outline-lime-500" 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <button 
          type="submit" 
          disabled={loading} 
          className={`bg-lime-500 text-white hover:opacity-80 px-8 py-2 rounded-full cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Submitting..." : "Proceed.."}
        </button>
      </form>
    </div>
  );
}
