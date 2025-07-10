import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Product } from './types';

interface Props {
    products: Product[] | null;
}

export default function Collection({ products }: Props) {

    const router = useRouter();

    if (!products) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
            {products.map((product) => (
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
                    <div className='block sm:hidden mt-3'>
                        {
                            product.discount ? (

                                <div>
                                    <h3 className="text-xs font-semibold truncate">{product.product}</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs font-semibold text-red-500">{product.discount}€</p>
                                        <p className="text-xs text-gray-500 font-semibold line-through">{product.price}€</p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="text-xs font-medium truncate">{product.product}</h3>
                                    <div className="flex justify-between">
                                        <p className="text-xs font-semibold">{product.price}€</p>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            ))}
        </div>
    );
}