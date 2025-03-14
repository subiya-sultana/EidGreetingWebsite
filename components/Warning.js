// /* eslint-disable @next/next/no-img-element */
// export default function Warning() {
//     return (
//         <div className="flex justify-center items-center border-2 border-dashed bg-amber-200 border-amber-400 sm:m-4 rounded-xl flex-col sm:flex-row sm:items-center relative animate-move delay-100">
//             <img
//                 src="/stickers/WarningSign.gif"
//                 alt="warning"
//                 className="h-32 w-32 sm:h-28 sm:w-28 lg:h-20 lg:w-20 -mt-3 sm:mt-0"
//             />
//             <h1 className="font-emilys-candy text-lg leading-5 text-center p-4 -mt-10 sm:mt-0">
//                 <span className="font-heart">Warning:</span> These memes may cause uncontrollable giggles, nostalgic Eid memories, sudden urge to tag your cousins, and deep reflections on how little Eidi you actually got.
//             </h1>

//             {/* Moving Dashed Border */}
//             {/* <div className="absolute -inset-1.5 border-2 border-dashed border-amber-400 rounded-xl animate-move"></div> */}
//         </div>
//     );
// }


/* eslint-disable @next/next/no-img-element */
export default function Warning() {
    return (
      <div className="bg-amber-200 flex justify-center items-center border-amber-400 sm:px-8 rounded-xl flex-col sm:flex-row sm:items-center relative animate-move delay-100" style={{ backgroundColor: '#fee685' }}>
        <img
          src="/stickers/WarningSign.gif"
          alt="warning"
          className="h-32 w-32 sm:h-28 sm:w-28 lg:h-20 lg:w-20 -mt-3 sm:mt-0"
        />
        <h1 className="font-emilys-candy text-lg leading-5 text-center p-4 -mt-10 sm:mt-0">
          <span className="font-heart">Warning:</span> These memes may cause uncontrollable giggles, nostalgic Eid memories, sudden urge to tag your cousins, and deep reflections on how little Eidi you actually got.
        </h1>
      </div>
    );
  }
  