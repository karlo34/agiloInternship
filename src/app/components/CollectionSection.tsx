// CollectionSection.tsx
import Image from 'next/image';
import { Product } from './types'; // adjust path accordingly
import { useRouter } from "next/navigation";

interface Props {
    products: Product[] | null;
    maxItems?: number;
}

export default function CollectionSection({ products, maxItems }: Props) {
    const router = useRouter();

    if (!products) return <p>Loading...</p>;

    const displayProducts = maxItems ? products.slice(0, maxItems) : products;

    return (
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-6">
            {displayProducts.map((product) => (
                <div key={product.id} data-collection={product.collection} className="flex flex-col w-[292px]">
                    <div className="relative overflow-hidden h-[390px] w-[292px]">
                        <Image
                            src={product.img}
                            alt={product.product}
                            fill
                            className="object-cover"
                            onClick={() => router.push(`shop//product/${product.id}`)}
                        />
                    </div>
                    <h3 className="mt-4 text-[16px]">
                        {product.product}
                    </h3>
                    <p className="block sm:hidden text-sm text-gray-500">
                        {product.breefly}
                    </p>
                </div>
            ))}
        </div>
    );
}