import { Product } from '@/app/components/types';
import { useEffect, useState } from 'react';

export default function RelatedProducts() {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    useEffect(() => {
        // Function to update the window width on resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const sliceCount = windowWidth <= 640 ? 2 : 3;
    const startIndex = 14;
    const endIndex = startIndex + sliceCount;
    return (
        <div className="w-full mx-auto py-10">
            <h2 className="text-5xl mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {products && products.slice(startIndex, endIndex).map((product) => (
                    <div key={product.id} className="text-center">
                        <img
                            src={product.img}
                            alt={product.product}
                            className="w-[163px] h-[163px] sm:w-[163px] sm:h-[163px] md:w-[384px] md:h-[286px] object-cover mb-4"
                        />
                        {(product.discount ?? 0) > 0 ? (
                            <>
                                <div className="flex justify-between items-center pr-[5%]">
                                    <h3 className="text-base font-normal">{product.product}</h3>
                                    <p className="text-[#DF4718] text-base font-semibold">{product.discount}€</p>
                                </div>
                                <div className="flex justify-between items-center mt-1 pr-[5%]">
                                    <p className='text-xs font-normal text-gray-500'>{product.collection}</p>
                                    <p className="text-xs font-semibold line-through text-gray-500 ">{product.price}€</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="sm:flex sm:justify-between sm:items-center pr-[5%]">
                                    <h3 className="sm:text-base text-xs font-normal sm:text-left text-left">{product.product}</h3>
                                    <p className="sm:text-base text-xs font-semibold sm:text-right text-left">{product.price}€</p>
                                </div>
                                <div className="hidden sm:block text-left mt-1">
                                    <p className='text-xs font-normal text-gray-500'>{product.collection}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}