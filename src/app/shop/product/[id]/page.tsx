'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Nav';
import { Product } from '@/app/components/types';  // Importing the Product interface

export default function ProductDetails() {
    const { id: idParam } = useParams();
    const [id, setId] = useState<number | undefined>(undefined);
    const [product, setProduct] = useState<Product | undefined>(undefined); // Now using the imported Product interface
    const [quantity, setQuantity] = useState(1); // State for quantity

    useEffect(() => {
        if (Array.isArray(idParam)) {
            console.warn('Unexpected array for id:', idParam);
            return;
        }
        if (idParam) {
            const numericId = parseInt(idParam, 10);
            if (!isNaN(numericId)) {
                setId(numericId);
            } else {
                console.warn('Invalid product ID:', idParam);
            }
        }
    }, [idParam]);

    useEffect(() => {
        if (typeof id === 'number') {
            fetchProduct(id);
        }
    }, [id]);

    const fetchProduct = async (id: number) => {
        try {
            const res = await fetch('/dummy_data.json');
            const data = await res.json();
            const foundProduct = data.find((product: Product) => product.id === id);
            if (foundProduct) {
                console.log('Found product:', foundProduct);
                setProduct(foundProduct);
            } else {
                console.log(`Product with id ${id} not found.`);
            }
        } catch (err) {
            console.error('Error fetching product:', err);
        }
    };

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity - 1);

    if (id === undefined) {
        return <p>Loading…</p>;
    }

    return (
        <div className='mx-[6%]'>
            <Navbar />
            {product ? (
                <div className='flex flex-col lg:flex-row lg:space-x-10 mt-10'>
                    {/* Image Section */}
                    <div className="relative w-full sm:w-1/2 h-[450px] flex-shrink-0">
                        <Image
                            src={product.img}
                            alt={product.product}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col mt-6 lg:mt-0 w-full lg:w-[40%]">
                        <p className="text-sm text-gray-500">{product.collection}</p>
                        <h1 className="text-3xl font-semibold my-3">{product.product}</h1>

                        {/* Price Section */}
                        <div className="flex items-center space-x-5">
                            {product.discount ? (
                                <p className="text-lg text-red-500 line-through">{product.price}€</p>
                            ) : null}
                            <p className="text-2xl font-bold">{product.discount ? product.discount : product.price}€</p>
                        </div>

                        <p className="text-sm mt-3">{product.description}</p>

                        <div className="mt-5">
                            <div>
                                <label className="font-medium inline">Materials</label>
                                <label className="font-medium inline pl-5 text-gray-500">Linen</label>
                                <select className="mt-2 p-2 w-full border rounded-md">
                                    <option value="Linen">Linen</option>
                                </select>
                            </div>
                            <div className="mt-5">
                                <label className="font-medium">Colors</label>
                                <label className='pl-3 text-gray-500' >Dark Gray</label>
                                <div className="flex space-x-3 mt-2">
                                    <button className="w-8 h-8 bg-gray-400"></button>
                                    <button className="w-8 h-8 bg-black"></button>
                                    <button className="w-8 h-8 bg-[#E8E8E8] border-gray-300"></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-6">
                            <div className="flex items-center border rounded-md">
                                <button
                                    onClick={decreaseQuantity}
                                    disabled={quantity === 1}
                                    className="px-4 py-2 text-lg disabled:text-gray-300 disabled:cursor-not-allowed"
                                >
                                    -
                                </button>
                                <span className="px-4 text-lg">{quantity}</span>
                                <button onClick={increaseQuantity} className="px-4 py-2 text-lg">
                                    +
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="lg:w-48 w-full h-[48px] px-5 py-3 bg-black text-white rounded-md font-semibold">
                                Add to cart
                            </button>
                        </div>

                        {/* Estimated Delivery */}
                        <p className="text-xs text-gray-500 mt-3">Estimated delivery 2-3 days</p>
                    </div>





                </div>
            ) : (
                <p>Product not found</p>
            )}
            <h1>Collection Inspired Interior</h1>
            <Image
                className="sm:w-full" // This makes the image take full width of the parent container
                src="/slike/product_img.png"
                alt="a"
                width={300} // The original width (for optimization)
                height={450} // The original height (for optimization)
                style={{ width: '100%', height: 'auto' }} // Ensures the image scales with its container
            />
        </div>
    );
}
