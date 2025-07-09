"use client";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import CollectionSection from "../components/CollectionSection";
import Collections from "../components/Collections";
import { ChevronDown } from "lucide-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from '../components/types';


const Shop = () => {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("/dummy_data.json");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };
        getData();
    }, []);
    return (
        <div className="min-h-[100vh]">
            <div className="mx-[6%]">
                <Navbar />
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl md:text-4xl font-semibold text-black">
                        Collections
                    </h1>
                    <div className="hidden sm:flex gap-2">
                        <button className="group flex items-center justify-center w-10 h-10 border border-black hover:cursor-pointer hover:bg-black rounded-full">
                            <ArrowLeftIcon className="w-5 h-5 text-black group-hover:text-white" />
                        </button>
                        <button className="group flex items-center justify-center hover:cursor-pointer w-10 h-10 border border-black hover:bg-black rounded-full">
                            <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-white" />
                        </button>
                    </div>
                    <button className="flex sm:hidden items-center w-[75px] h-[32px] rounded-sm px-4 py-1 text-xs font-medium text-white bg-black">
                        View All
                    </button>
                </div>
                {
                    products && (
                        <CollectionSection products={products ?? []} maxItems={4} />
                    )
                }
                <h1>Shop</h1>
                <div className="flex relative items-center gap-6 text-sm">
                    <div className="hidden sm:flex relative">
                        <select
                            id="country"
                            className="pr-6 appearance-none bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                            <option value="">Collection</option>
                            <option value="en">EN</option>
                            <option value="dk">DK</option>
                            <option value="de">DE</option>
                            <option value="de">DE</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2" />
                    </div>
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
                </div>
                {
                    products && (
                        <Collections products={products ?? []} />
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Shop;