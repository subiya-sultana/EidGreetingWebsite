import { useState, useEffect } from "react";

const memes = [
  "https://i.imgflip.com/1bij.jpg",
  "https://i.imgflip.com/26am.jpg",
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.imgflip.com/2/1otk96.jpg",
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
    <div className="my-auto text-center border-2 border-cyan-700 m-4 max-w-2xl p-4 rounded-lg bg-[#B2E066]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-xl font-bold mb-2">Meme Container</div>
      <div
        className="border-2 border-cyan-700 m-4 h-70 flex justify-center items-center p-2"
      >
        <img src={memes[index]} alt="Meme" className="max-w-full h-64 rounded-lg" />
      </div>
      <div className="flex justify-around">
        <button
          className="border-2 border-cyan-700 px-4 py-2 rounded-lg"
          onClick={() => setIndex((index - 1 + memes.length) % memes.length)}
        >
          Prev Meme
        </button>
        <button className="border-2 border-red-700 px-4 py-2 rounded-lg">Like</button>
        <button
          className="border-2 border-cyan-700 px-4 py-2 rounded-lg"
          onClick={() => setIndex((index + 1) % memes.length)}
        >
          Next Meme
        </button>
      </div>
    </div>
  );
}
