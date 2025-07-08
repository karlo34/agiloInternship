"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
    id: number;
    product: string;
    img: string;
    //   description: string;
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
        <section className="w-full px-4 md:px-12 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold text-black">
                    Collections
                </h1>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                        <ArrowLeftIcon className="w-5 h-5 text-black hover:cursor-pointer" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                        <ArrowRightIcon className="w-5 h-5 text-black hover:cursor-pointer" />
                    </button>
                </div>
                {/* <button className="px-4 py-1 text-sm font-medium text-white bg-black rounded-md">
                    View All
                </button> */}
            </div>

            {/* Product Grid */}
            {products ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="w-full h-[390px] relative overflow-hidden">
                                <Image
                                    src={product.img}
                                    alt={product.product}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-black">
                                {product.product}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {/* {product.description} */}
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