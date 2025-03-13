import Link from "next/link";

export default function Footer() {
    return(
        <div className="bg-lime-300 text-center py-4 text-sm font-bold -tracking-tighter">
            Designed and Built by @<Link href="https://subiya-sultana.github.io/MyPortfolio/" target="_blank" className="underline">Subiya.</Link> All Rights Reserved.&copy;
        </div>
    );
};
