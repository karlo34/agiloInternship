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
                    <h1 className="text-3xl md:text-4xl font-semibold">
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
                <h1 className="text-3xl md:text-4xl font-semibold mt-30 mb-10">Shop</h1>

                <div className="flex flex-wrap gap-4 mb-8 text-sm">
                    <select className="hidden sm:block p-2 border items-center rounded-sm h-[40px] w-[140px] bg-white shadow-sm justify-around text-center">
                        <option value="">Collection</option>
                        <option value="Scandinavian Simplicity">Scandinavian Simplicity</option>
                        <option value="Modern Luxe">Modern Luxe</option>
                        <option value="Boho Chic">Boho Chic</option>
                        <option value="Timeless Classic">Timeless Classic</option>
                    </select>
                    <select className="hidden sm:block p-2 border rounded-md w-[133px] bg-white shadow-sm text-center">
                        <option value="">Category</option>
                        <option value="Sofa">Sofa</option>
                        <option value="Armchair">Armchair</option>
                    </select>
                    <select className="hidden sm:block p-2 border rounded-md w-[99px] bg-white shadow-sm text-center">
                        <option value="">Type</option>
                        <option value="2-seater">2-Seater</option>
                        <option value="3-seater">3-Seater</option>
                    </select>
                    <select className="p-2 border rounded-md bg-white shadow-sm ml-auto text-center">
                        <option value="">Sort by</option>
                        <option value="new">Sort by: Newest</option>
                        <option value="old">Sort by: Oldest</option>
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                    </select>
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