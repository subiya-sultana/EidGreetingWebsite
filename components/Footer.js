import Link from "next/link";

export default function Footer() {
   return (
      <div className="bg-lime-300 text-center py-4 font-bold -tracking-tighter font-heart">
         {/* Credits Section */}
         <div className="mb-2 hover:text-base duration-1000 text-sm">
            Designed and Built by{" "}
            <Link
               href="https://subiya-sultana.github.io/MyPortfolio/"
               target="_blank"
               className="underline pr-3.5 hover:text-rose-500"
            >
               @Subiya.
            </Link>{" "}
            All Rights Reserved.&copy;
         </div>
      </div>
   );
}
