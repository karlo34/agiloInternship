"use client";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import CollectionSection from "../components/CollectionSection";
import Collections from "../components/Collections";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDown, Plus } from "lucide-react";
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
            <Navbar />
            <div className="">
                <div className="mx-[6%] flex items-center justify-between mb-8 mt-10">
                    <h1 className="sm:text-5xl big-body sm:title text-2xl">
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
                    <button className="flex sm:hidden items-center justify-center w-[75px] h-[32px] rounded-sm text-xs font-medium text-white bg-black">
                        View All
                    </button>
                </div>
                {
                    products && (
                        <CollectionSection products={products ?? []} maxItems={4} />
                    )
                }
                <h1 className="mx-[6%] text-2xl md:text-5xl big-body sm:title sm:mt-30 sm:mb-10 mt-15 mb-5">Shop</h1>

                <div className="flex flex-wrap justify-between gap-4 mb-8 text-sm mx-[6%]">
                    <div className="flex flex-wrap gap-4">
                        <div className="relative sm:hidden small-body sm:body">
                            <select className="block sm:hidden px-2 border items-center rounded-sm h-[33px] w-[73px] bg-white text-center pr-8 appearance-none border-gray-200 text-xs">
                                <option value="">Filter</option>
                                <option value="new">Sort by: Filter</option>
                                <option value="old">Sort by: Filter</option>
                                <option value="priceLowHigh">Price: Low to High</option>
                                <option value="priceHighLow">Price: High to Low</option>
                            </select>
                            {/* Custom plus icon positioned over the select */}
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <Plus className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>
                        <div className="relative sm:inline-block hidden">
                            <select
                                className="appearance-none sm:block p-2 border rounded-sm h-[40px] w-[140px] bg-white text-center pr-8 focus:outline-none border-gray-200 text-base">
                                <option value="">Collection</option>
                                <option value="Scandinavian Simplicity">Scandinavian Simplicity</option>
                                <option value="Modern Luxe">Modern Luxe</option>
                                <option value="Boho Chic">Boho Chic</option>
                                <option value="Timeless Classic">Timeless Classic</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 w-6 h-6" />
                        </div>
                        <div className="relative sm:inline-block hidden">
                            <select className="appearance-none sm:block p-2 border rounded-sm h-10 w-[133px] bg-white text-center pr-8 focus:outline-none border-gray-200 text-base">
                                <option value="">Category</option>
                                <option value="Sofa">Sofa</option>
                                <option value="Armchair">Armchair</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 w-6 h-6" />
                        </div>
                        <div className="relative sm:inline-block hidden">
                            <select className="appearance-none sm:block p-2 border rounded-sm h-10 w-[99px] bg-white text-center pr-8 focus:outline-none border-gray-200 text-base">
                                <option value="">Type</option>
                                <option value="2-seater">2-Seater</option>
                                <option value="3-seater">3-Seater</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 w-6 h-6" />
                        </div>
                    </div>
                    <div className="relative">
                        <select className="appearance-none sm:block p-2 border rounded-sm sm:h-10 sm:w-[117px] h-[33px] w-[84px]  bg-white text-center pr-8 focus:outline-none border-gray-200 sm:text-base text-xs">
                            <option value="">Sort by</option>
                            <option value="new">Sort by: Newest</option>
                            <option value="old">Sort by: Oldest</option>
                            <option value="priceLowHigh">Price: Low to High</option>
                            <option value="priceHighLow">Price: High to Low</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 sm:w-6 sm:h-6 w-5 h-5" />
                    </div>
                </div>
                {
                    products && (
                        <Collections products={products?.slice(4) ?? []} />
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Shop;