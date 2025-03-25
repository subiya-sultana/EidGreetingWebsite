/* eslint-disable @next/next/no-img-element */
export default function Warning({ title, message }) {
   return (
      <div className="bg-amber-200 flex justify-center items-center border-amber-400 sm:px-8 rounded-xl flex-col sm:flex-row sm:items-center relative animate-move delay-100" style={{ backgroundColor: '#fee685' }}>
         <img
            src="/stickers/WarningSign.gif"
            alt="warning"
            className="h-32 w-32 sm:h-28 sm:w-28 lg:h-20 lg:w-20 -mt-3 sm:mt-0"
         />
         <h1 className="font-emilys-candy text-lg leading-5 text-center text-rose-900 p-4 -mt-9 sm:mt-0">
            <span className="font-heart">{title}</span>
            {message}
         </h1>
      </div>
   );
}
