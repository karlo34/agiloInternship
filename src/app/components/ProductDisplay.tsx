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
    console.log(product.id);
    return (
        <div className="flex flex-wrap lg:flex-row lg:space-x-10 sm:mx-[6%] mx-0 ">
            {/* Image Section */}
            <div className="relative w-full sm:w-1/2 h-[500px] flex-shrink-0 overflow-hidden">
                <button
                    className="group hidden sm:flex items-center justify-center w-10 h-10 border border-black hover:cursor-pointer hover:bg-black rounded-full absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowLeftIcon className="w-5 h-5 text-black group-hover:text-white" />
                </button>

                {/* FLEX CONTAINER for images */}
                <div className="sm:flex hidden w-[918px] h-[612px] space-x-2">
                    {/* Full Product Image */}
                    <div className="relative w-[459px] h-[612px] overflow-hidden">
                        <Image
                            src={product.img}
                            alt={product.product}
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Cropped/Zoomed-in Product Image */}
                    <div className="relative w-[459px] h-[612px] overflow-hidden">
                        <Image
                            src={product.img}
                            alt={product.product}
                            fill
                            className="object-cover object-[90%_20%] scale-[1.4]"
                        />
                    </div>
                </div>

                {/* Show only first image on mobile */}
                <div className="relative sm:hidden w-full h-full overflow-hidden mt-7">
                    <Image
                        src={product.img}
                        alt={product.product}
                        fill
                        className="object-cover object-center"
                    />
                </div>

                <button
                    className="group hidden sm:flex items-center justify-center w-10 h-10 border border-black hover:cursor-pointer hover:bg-black rounded-full absolute right-5 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-white" />
                </button>
            </div>
            <h1 className='page-underline absolute sm:left-[36vw] left-[43.5vw] sm:bottom-15 bottom-52 space-x-7'>1</h1>
            <h1 className='absolute sm:left-[38.5vw] left-[49.5vw] sm:bottom-15 bottom-52 space-x-7'>2</h1>


            {/* Product Details Section */}
            <div className="flex flex-col sm:px-0 px-5 sm:w-[540px] w-full sm:mt-0 mt-7">
                <p className="text-base font-normal text-gray-500">{product.collection}</p>
                <h1 className="sm:text-[40px] text-2xl sm:font-medium font-semibold my-3">{product.product}</h1>
                {/* Price Section */}
                <div className="flex items-center space-x-5">
                    {product.discount ? (
                        <p className="text-2xl font-normal text-red-500 line-through">€{product.price}</p>
                    ) : null}
                    <p className="text-2xl font-normal">€{product.discount ? product.discount : product.price}</p>
                </div>
                <p className="sm:text-base text-xs mt-3 sm:text-[#050505] text-gray-500 sm:w-[80%] w-full leading-[140%]">{product.description}</p>
                <div className="mt-5">
                    <div className="flex flex-col space-y-2">
                        <div>
                            <label className="text-base font-normal leading-[140%]">Materials</label>
                            <label className="text-base font-normal pl-5 text-gray-500 leading-[140%]">{material}</label>
                        </div>
                        <div className="relative flex sm:items-center sm:justify-start justify-end">
                            <select
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                                className="mt-2 p-2 h-12 sm:w-[243px] text-base font-normal w-full border border-gray-200 rounded-md appearance-none pl-3 pr-10"
                            >
                                <option value="Linen">Linen</option>
                                <option value="Cotton">Cotton</option>
                            </select>
                            <div className="absolute pt-[2.5vh] pl-[14vw] flex items-center pointer-events-none sm:pr-0 pr-[5vw] sm:pt-[1vh]">
                                <ChevronDown className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="text-base font-normal">Colors</label>
                        <label className="text-base font-normal pl-3 text-gray-500">{selectedColor}</label>
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
                <div className="flex sm:flex-row flex-col items-center justify-center space-x-4 sm:mt-6 mt-6">
                    <div className="flex items-center border rounded-sm border-gray-200 sm:pl-3 pl-[35vw] sm:w-[13vw] w-full sm:mb-0 mb-5">
                        <button
                            onClick={decreaseQuantity}
                            disabled={quantity === 1}
                            className="px-3 py-2 sm:text-lg text-2xl font-light disabled:text-gray-300 disabled:cursor-not-allowed"
                        >
                            -
                        </button>
                        <span className="px-4 text-[20px] font-normal w-12">{quantity}</span>
                        <button onClick={increaseQuantity} className="px-3 py-2 sm:text-lg text-2xl">
                            +
                        </button>
                    </div>
                    <button className="w-full h-[48px] px-3 sm:ml-3 -ml-3 bg-black text-white rounded-md font-light text-base">
                        Add to cart
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">Estimated delivery 2-3 days</p>
            </div>
        </div >
    );
};

export default ProductDisplay;