import Link from "next/link";
import { Search, ShoppingBag, ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="w-full px-8 lg:px-14 py-6 flex flex-wrap items-center justify-between">
            <h1 className="text-2xl font-semibold whitespace-nowrap">
                <Link href="/">SofaSocietyCo.</Link>
            </h1>
            <ul className="hidden sm:flex items-center gap-10 text-sm tracking-wide mr-10">
                <li className="hover:text-gray-700 transition">
                    <Link href="#">About</Link>
                </li>
                <li className="hover:text-gray-700 transition">
                    <Link href="#">Inspiration</Link>
                </li>
                <li className="hover:text-gray-700 transition">
                    <Link href="#">Shop</Link>
                </li>
            </ul>

            <div className="flex relative items-center gap-6 text-sm">
                <div className="hidden sm:flex relative">
                    <select
                        id="country"
                        className="pr-6 appearance-none bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
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

                <button aria-label="Menu" className="flex sm:hidden hover:text-gray-700">
                    <Menu className="w-5 h-5" />
                </button>
            </div>
            {/* <div className="fixed top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-500 z-50"></div> */}
        </nav>
    );
};

export default Navbar;