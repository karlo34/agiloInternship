'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ProductDisplay from '@/app/components/ProductDisplay';  // Importing ProductDisplay component
import { Product } from '@/app/components/types';
import Navbar from '@/app/components/Nav';
import Footer from '@/app/components/Footer';

const ProductDetails = () => {
    const { id: idParam } = useParams();
    const [id, setId] = useState<number | undefined>(undefined);
    const [product, setProduct] = useState<Product | undefined>(undefined);

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
                setProduct(foundProduct);
            } else {
                console.log(`Product with id ${id} not found.`);
            }
        } catch (err) {
            console.error('Error fetching product:', err);
        }
    };

    if (id === undefined) {
        return <p>Loading…</p>;
    }

    return (
        <div>
            <div className='mx-[6%]'>
                <Navbar />
                {product ? <ProductDisplay product={product} quantity={1} increaseQuantity={() => { }} decreaseQuantity={() => { }} /> : <p>Product not found</p>}
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;