import { Product } from '@/app/components/types';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";


export default function RelatedProducts() {
    const router = useRouter();
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
    const startIndex = 15;
    const endIndex = startIndex + sliceCount;
    return (
        <div className="w-full mx-auto pb-10">
            <h2 className="sm:text-5xl text-2xl sm:mb-6 mb-7">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {products && products.slice(startIndex, endIndex).map((product) => (
                    <div key={product.id} className="text-left" onClick={() => router.push(`/shop/product/${product.id}`)}>
                        <img
                            src={product.img}
                            alt={product.product}
                            className="w-full h-auto object-cover mb-4"
                            loading='lazy' //nadodano kasnije
                        />

                        {product.discount && product.discount > 0 ? (
                            <>
                                <div className="flex justify-between items-center">
                                    <h3 className="sm:text-base text-xs font-normal">{product.product}</h3>
                                    <p className="hidden sm:block sm:text-base text-xs font-semibold text-[#DF4718]">{product.discount}€</p>
                                </div>
                                <div className='flex sm:hidden justify-between items-center mt-1'>
                                    <p className="text-xs font-semibold text-[#DF4718]">{product.discount}€</p>
                                    <p className="text-xs font-semibold text-gray-500 line-through">{product.price}€</p>
                                </div>
                                <div className="hidden sm:flex justify-between items-center mt-1">
                                    <p className="text-xs font-normal text-gray-500">{product.collection}</p>
                                    <p className="text-xs font-semibold text-gray-500 line-through">{product.price}€</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="sm:flex sm:justify-between sm:items-center pr-[5%]">
                                    <h3 className="sm:text-base text-xs font-normal sm:text-left text-left">{product.product}</h3>
                                    <p className="sm:text-base text-xs font-semibold sm:text-right text-left pt-1">{product.price}€</p>
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