// ProductDisplay.tsx
import { ArrowLeftIcon, ArrowRightIcon, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const ProductDisplay = ({ product, quantity, increaseQuantity, decreaseQuantity }: {
    product: any;
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
}) => {
    const [material, setMaterial] = useState('Linen');
    const [selectedColor, setSelectedColor] = useState('Dark Gray');
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-10 mt-10 sm:mx-[6%] mx-0">
            {/* Image Section */}
            <div className="relative w-full sm:w-1/2 h-[495px] flex-shrink-0 overflow-hidden">
                {/* Left Arrow Button */}
                <button
                    className="group hidden sm:flex items-center justify-center w-10 h-10 border border-black hover:cursor-pointer hover:bg-black rounded-full absolute left-5 top-1/2 transform -translate-y-1/2 z-10"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-black group-hover:text-white" />
                </button>

                {/* First Image (full) */}
                <Image
                    src={product.img}
                    alt={product.product}
                    objectFit="cover"
                    width={459}
                    height={612}
                    className="absolute top-0"
                />

                {/* Second Image (left part of the first image) */}
                <Image
                    src={product.img}
                    alt={product.product}
                    objectFit="cover"
                    width={459}
                    height={612}
                    className="absolute left-[calc(50%+160px)] top-0"
                />

                {/* Right Arrow Button */}
                <button
                    className="group hidden sm:flex items-center justify-center w-10 h-10 border border-black hover:cursor-pointer hover:bg-black rounded-full absolute right-5 top-1/2 transform -translate-y-1/2"
                >
                    <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-white" />
                </button>
            </div>

            {/* Image Number Indicator directly under the image */}
            {/* <div className="block justify-center mt-3 space-x-4">
                <span className="text-lg">1</span>
                <span className="text-lg">2</span>
            </div> */}


            {/* Product Details Section */}
            <div className="flex flex-col mt-6 lg:mt-0 w-full lg:w-[40%] sm:px-0 px-5">
                <p className="text-sm text-gray-500">{product.collection}</p>
                <h1 className="text-3xl font-semibold my-3">{product.product}</h1>
                {/* Price Section */}
                <div className="flex items-center space-x-5">
                    {product.discount ? (
                        <p className="text-lg text-red-500 line-through">{product.price}€</p>
                    ) : null}
                    <p className="text-2xl font-bold">{product.discount ? product.discount : product.price}€</p>
                </div>
                <p className="text-sm mt-3 sm:text-[#050505] text-gray-500">{product.description}</p>
                <div className="mt-5">
                    <div className="flex flex-col space-y-2">
                        <div>
                            <label className="font-medium">Materials</label>
                            <label className="font-medium pl-5 text-gray-500">{material}</label>
                        </div>
                        <div className="relative flex items-center">
                            <select
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                                className="mt-2 p-2 h-12 sm:w-[243px] w-full border border-gray-200 rounded-md appearance-none pl-3 pr-10"
                            >
                                <option value="Linen">Linen</option>
                                <option value="Cotton">Cotton</option>
                            </select>
                            <div className="absolute pt-[1vh] pl-[14vw] flex items-center pointer-events-none">
                                <ChevronDown className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="font-medium">Colors</label>
                        <label className="pl-3 text-gray-500">{selectedColor}</label>
                        <div className="flex space-x-3 mt-2">
                            <button
                                className={`w-8 h-8 bg-gray-400 relative ${selectedColor === 'Dark Gray' ? 'underline-active' : ''}`}
                                onClick={() => setSelectedColor('Dark Gray')}
                            >
                            </button>
                            <button
                                className={`w-8 h-8 bg-black relative ${selectedColor === 'Black' ? 'underline-active' : ''}`}
                                onClick={() => setSelectedColor('Black')}
                            >
                            </button>
                            <button
                                className={`w-8 h-8 bg-[#E8E8E8] border-gray-300 relative ${selectedColor === 'Light Gray' ? 'underline-active' : ''}`}
                                onClick={() => setSelectedColor('Light Gray')}
                            >
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-center space-x-4 mt-6">
                    <div className="flex items-center border rounded-sm border-gray-200 pl-3 w-full sm:mb-0 mb-5">
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
                    <button className="w-full h-[48px] px-5 py-3 bg-black text-white rounded-md font-semibold">
                        Add to cart
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">Estimated delivery 2-3 days</p>
            </div>
        </div>
    );
};

export default ProductDisplay;