/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

const memes = [
  "/Memes/1.png",
  "/Memes/2.png",
  "/Memes/3.png",
  "/Memes/4.png",
  "/Memes/5.png",
  "/Memes/6.png",
  "/Memes/7.png",
  "/Memes/8.png",
  "/Memes/9.png",
  "/Memes/10.png",
  "/Memes/11.png",
  "/Memes/12.png",
  "/Memes/13.png",
  "/Memes/14.png",
  "/Memes/15.png",
  "/Memes/16.png",
  "/Memes/17.png",
  "/Memes/18.png",
  "/Memes/19.png",
  "/Memes/20.png",
  "/Memes/21.png",
  "/Memes/22.png",
  "/Memes/23.png",
  "/Memes/24.png",
];

export default function MemeContainer() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % memes.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <div
      className="my-auto text-center border-2 border-rose-700 max-w-lg rounded-xl shadow-xl bg-rose-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Title bar */}
      <div className="flex justify-between items-center bg-rose-300 px-4 py-2 rounded-t-xl border-b border-rose-700 shadow-md">
        {/* Left - File Icon & Name */}
        <div className="flex items-center space-x-2">
          <i className="fi fi-rr-file-code text-rose-900"></i>
          <p className="text-rose-900 font-semibold text-xl sm:text-2xl">EidMemes.js</p>
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


      {/* Meme container */}
      <div className="border-2 border-rose-700 m-4 mb-1 rounded-lg bg-rose-200 shadow-md">
        <img
          src={memes[index]}
          alt="Meme"
          className="max-w-full max-h-full rounded-lg shadow-md"
        />
      </div>

      {/* Meme buttons */}
      <div className="flex justify-around px-4 py-2 my-2">
        {/* Rewind Button */}
        <button
          className="cursor-pointer border border-rose-700 rounded-lg px-3 pt-1 bg-lime-200 hover:bg-lime-300 transition-all flex justify-center items-center space-x-1 animate-rewind"
          onClick={() => setIndex((index - 1 + memes.length) % memes.length)}
        >
          <i className="fi fi-sr-rewind text-rose-700 text-2xl"></i>
        </button>

        {/* Heart Button */}
        <button className="cursor-pointer border border-red-400 px-3 pt-1 rounded-lg bg-rose-300 hover:bg-rose-400 transition-all flex justify-center items-center animate-heart">
          <i className="fi fi-sr-heart text-rose-900 text-2xl"></i>
        </button>

        {/* Forward Button */}
        <button
          className="cursor-pointer border border-rose-700 rounded-lg px-3 pt-1 bg-lime-200 hover:bg-lime-300 transition-all flex justify-center items-center space-x-1 animate-forward"
          onClick={() => setIndex((index + 1) % memes.length)}
        >
          <i className="fi fi-sr-forward text-rose-700 text-2xl"></i>
        </button>
      </div>



    </div>
  );
}
