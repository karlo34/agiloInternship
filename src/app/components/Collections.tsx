"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
    id: number;
    collection: string;
    product: string;
    img: string;
    breefly: string;
    description: string;
    price: number;
};

const Collections = () => {
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
        <section className="w-full py-10">
            {/* Header */}
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

                {/* 75 32 */}
            </div>

            {/* Product Grid */}
            {products ? (
                <div className="flex justify-between">
                    {products.map((product) => (
                        <div key={product.id} data-collection={product.collection} className="flex flex-col w-[292px]">
                            <div className="relative overflow-hidden h-[390px] w-[292px]">
                                <Image
                                    src={product.img}
                                    alt={product.product}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-[16px]">
                                {product.product}
                            </h3>
                            <p className="block sm:hidden text-sm text-gray-500">
                                {product.breefly}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default Collections;