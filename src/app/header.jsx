'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-[var(--main-color)] shadow-lg h-[10vh] relative flex justify-center items-center">
            <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-16 h-[100%] w-[90%] md:w-[80%] flex justify-between">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        className="p-2 w-28 h-auto sm:w-28 sm:h-auto md:w-56 md:h-auto lg:w-56 lg:h-auto"
                        src="/logo.png"
                        alt="SWWO Logo"
                        width={1280}
                        height={355}
                        priority
                    />
                </Link>
                <nav className="h-[100%] flex flex-row justify-around items-center">
                    <button className="text-xl md:hidden" onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <ul className="hidden md:flex">
                        <li>
                            <Link href="/" className="font-semibold p-3 rounded hover:bg-[var(--secondary-color)] hover:text-[var(--highlight-color)]">Home</Link>
                        </li>
                        <li>
                            <Link href="services" className="font-semibold p-3 rounded hover:bg-[var(--secondary-color)] hover:text-[var(--highlight-color)]">Service</Link>
                        </li>
                        <li>
                            <Link href="contacts" className="font-semibold p-3 rounded hover:bg-[var(--secondary-color)] hover:text-[var(--highlight-color)]">Contact</Link>
                        </li>
                    </ul>
                    {isOpen && (
                        <ul className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-full z-50 md:hidden">
                            <li>
                                <Link href="/" className="block font-semibold p-3 hover:bg-[var(--secondary-color)] hover:text-[var(--highlight-color)]">Home</Link>
                            </li>
                            <li>
                                <Link href="services" className="block font-semibold p-3 hover:bg-[var(--secondary-color)] hover:text-[var(--highlight-color)]">Service</Link>
                            </li>
                            <li>
                                <Link href="contacts" className="block font-semibold p-3 hover:bg-[var(--secondary-color)] hover:text-[var(--highlight-color)]">Contact</Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}
