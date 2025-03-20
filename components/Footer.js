import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-lime-300 text-center py-4  font-bold -tracking-tighter font-heart">
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

      {/* Credits & Attribution Section */}
      {/* <div className="flex justify-center items-center mt-2 text-xs">
        <div className="mr-4 font-semibold">Credits & Attribution:</div>
        <a
          href="https://www.flaticon.com/free-animated-icons/previous"
          title="previous animated icons"
          target="_blank"
          className="underline pr-4"
        >
          Previous animated icons created by Freepik - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-animated-icons/next" 
            title="next animated icons" 
            target="_blank"
            className="underline"
        >
            Next animated icons created by Freepik - Flaticon
        </a>
      </div> */}
      
    </div>
  );
}
