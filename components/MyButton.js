import Link from "next/link";

export default function MyButton({ BtnName, ReferTo }) {
    return (
        <Link href={ReferTo} prefetch={false}>
            <span className="cursor-pointer bg-gradient-to-r from-rose-500 to-rose-400 text-white px-6 py-3 m-2 text-lg font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 block text-center tracking-wider">
                {BtnName}
            </span>
        </Link>
    );
}
