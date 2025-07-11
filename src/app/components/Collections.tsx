import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Product } from './types';
import { useState, useEffect } from 'react';

interface Props {
    products: Product[] | null;
}

export default function Collection({ products }: Props) {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9); // Default page size

    // Adjust PAGE_SIZE based on window size
    useEffect(() => {
        const updatePageSize = () => {
            if (window.innerWidth < 640) { // For mobile (sm: or smaller)
                setPageSize(8);
            } else { // For larger screens
                setPageSize(9);
            }
        };

        // Initial call to set the page size
        updatePageSize();

        // Add event listener to update page size on window resize
        window.addEventListener('resize', updatePageSize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', updatePageSize);
        };
    }, []);

    if (!products) return <p>Loading...</p>;

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / pageSize);

    // Ensure currentPage is within valid range (1 to totalPages)
    if (currentPage < 1) setCurrentPage(1);
    if (currentPage > totalPages) setCurrentPage(totalPages);

    // Calculate the range of products to display for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the products array correctly based on current page
    const currentProducts = products.slice(startIndex, endIndex);

    // Function to change page
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                {currentProducts.map((product) => {
                    return (
                        <div key={product.id} className="flex flex-col w-full">
                            {/* Image */}
                            <div className="relative overflow-hidden h-[180px] sm:h-[250px] w-full rounded-md shadow-sm">
                                <Image
                                    src={product.img}
                                    alt={product.product}
                                    fill
                                    className="object-cover"
                                    onClick={() => router.push(`shop//product/${product.id}`)}
                                />
                            </div>

                            <div className='hidden sm:block'>
                                <div className="flex justify-between items-center mt-5">
                                    <h3 className="text-sm font-medium truncate">{product.product}</h3>
                                    <p className="text-sm font-semibold">{product.price}€</p>
                                </div>
                                <p className="text-xs text-gray-500">{product.collection}</p>
                            </div>

                            {/* Mobile View (sm:hidden) */}
                            <div className='block sm:hidden mt-3'>
                                {(product.discount ?? 0) > 0 ? (
                                    <div>
                                        <h3 className="text-xs font-semibold truncate">{product.product}</h3>
                                        <div className="flex justify-between items-center">
                                            <p className="text-xs font-semibold text-customOrange">{product.discount}€</p>
                                            <p className="text-xs text-gray-500 font-semibold line-through">{product.price}€</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        {/* No discount, regular price */}
                                        <h3 className="text-xs font-medium truncate">{product.product}</h3>
                                        <p className="text-xs font-semibold">{product.price}€</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 space-x-2">
                {/* Previous Page Number (Show if it's not the first page) */}
                {currentPage > 1 && (
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-200"
                    >
                        {currentPage - 1}
                    </button>
                )}

                {/* Current Page Number */}
                <button
                    className="px-3 py-1 rounded-md font-semibold text-blue-500 bg-blue-100"
                >
                    {currentPage}
                </button>

                {/* Next Page Number (Show if it's not the last page) */}
                {currentPage < totalPages && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-200"
                    >
                        {currentPage + 1}
                    </button>
                )}
            </div>
        </div>
    );
}