import Image from 'next/image';
import { Product } from './types';
import { useRouter } from 'next/navigation';

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
            {displayProducts.map((product) => {
                return (
                    <div
                        key={product.id}
                        data-collection={product.collection}
                        className="flex flex-col w-[292px]"
                    >
                        <div className="relative overflow-hidden h-[390px] w-[292px]">
                            {/* ← Paste the dynamic className here */}
                            <Image
                                src={product.img}
                                alt={product.product}
                                fill
                                className={`object-cover ${product.id == '1'
                                        ? 'object-[45%_50%]'
                                        : product.id == '2'
                                            ? 'object-[50%_50%]'
                                            : product.id == '3'
                                                ? 'object-[100%_50%]'
                                                : 'object-[0%_50%]'
                                    }`}
                                onClick={() => router.push(`shop/product/${product.id}`)}
                            />
                        </div>
                        <h3 className="mt-4 text-base font-normal">
                            {product.product}
                        </h3>
                        <p className="block sm:hidden text-xs text-gray-500">
                            {product.breefly}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}