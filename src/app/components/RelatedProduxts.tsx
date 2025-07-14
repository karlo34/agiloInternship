import { Product } from '@/app/components/types';
import { useEffect, useState } from 'react';

export default function RelatedProducts() {
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
        <div>
            <h2 className="text-3xl font-semibold">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    products && (
                        products.slice(0, 4).map((product) => (
                            <div key={product.id} className="border p-4 rounded-lg">
                                <img
                                    src={product.img}
                                    alt={product.product}
                                    className="w-full h-48 object-cover mb-4"
                                />
                                <h3 className="text-xl font-medium">{product.product}</h3>
                                <p className="text-gray-600">${product.price}</p>
                            </div>
                        )))}
            </div>
        </div>
    )
}