'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProductDetails() {
    const { id: idParam } = useParams();
    const [id, setId] = useState<number | undefined>(undefined);

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
            // console.log('Valid product ID:', id);
            fetchProduct(id);
        }
    }, [id]);

    const fetchProduct = async (id: number) => {
        try {
            const res = await fetch('/dummy_data.json');
            const data = await res.json();
            const product = data.find((product: { id: number }) => product.id === id);
            if (product) {
                console.log('Found product:', product);
            } else {
                console.log(`Product with id ${id} not found.`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (id === undefined) {
        return <p>Loading…</p>;
    }

    return (
        <div>
            <h1>Item ID: {id}</h1>
            <h2>Type: {typeof id}</h2>
        </div>
    );
}
