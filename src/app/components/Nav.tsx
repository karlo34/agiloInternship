"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, ChevronDown, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { useIsSmUp } from '../hooks/useIsSm';

interface Props {
    isAbout ?: boolean;
}
const Navbar = ({ isAbout  }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the sliding menu
    const isSmUp = useIsSmUp();

    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const isAboutUs = pathname === "/about";

    const textColor = isHomePage ? "text-white" : isAboutUs && isSmUp ? "text-white" : "text-black";


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <nav className={`mb-[0px] pt-[31px] sm:mb-[106px] px-10 sm:px-[6%] flex flex-wrap items-center justify-between relative w-full z-50 ${textColor}`}>
            <h1 className="text-2xl title whitespace-nowrap">
                <Link href="/">SofaSocietyCo.</Link>
            </h1>

            {/* Desktop menu */}
            <ul className="hidden sm:flex items-center gap-10 text-sm tracking-wide mr-10">
                <li className="hover:text-gray-700 transition">
                    <Link href="/about">About</Link>
                </li>
                <li className="hover:text-gray-700 transition">
                    <Link href="#">Inspiration</Link>
                </li>
                <li className="hover:text-gray-700 transition">
                    <Link href="/shop">Shop</Link>
                </li>
            </ul>

            {/* Right side buttons */}
            <div className="flex relative items-center gap-6 text-sm">
                <div className="hidden sm:flex relative">
                    <select
                        id="country"
                        className="pr-6 appearance-none bg-transparent text-sm small focus:outline-none cursor-pointer">
                        <option value="hr">HR</option>
                        <option value="en">EN</option>
                        <option value="dk">DK</option>
                        <option value="de">DE</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2" />
                </div>

                <button aria-label="Search" className="hidden sm:flex hover:text-gray-700">
                    <Search className="w-5 h-5" />
                </button>

                <button aria-label="Cart" className="hover:text-gray-700">
                    <ShoppingBag className="w-5 h-5" />
                </button>

                {/* Mobile menu button (hamburger) */}
                <button
                    aria-label="Menu"
                    className={`flex sm:hidden hover:text-gray-700 z-50`}
                    onClick={handleMenuToggle}
                >
                    <Menu className={`w-5 h-5 ${textColor}`} />
                </button>
            </div>

            {/* Sliding Menu for Mobile */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-10 transform transition-transform duration-400 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full text-white">
                    <ul className="text-2xl space-y-6">
                        <li>
                            <Link href="/about" onClick={handleMenuToggle}>About</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={handleMenuToggle}>Inspiration</Link>
                        </li>
                        <li>
                            <Link href="/shop" onClick={handleMenuToggle}>Shop</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;