import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {
    return (
        <div className="w-[1248px] flex h-[656px]">
            <div className=" w-1/3">
                <Image
                    src="/slike/details_img2.png"
                    alt="an image of a product"
                    width={492}
                    height={656}
                />
            </div>
            <div className="w-2/3">
                <h1 className="text-5xl">
                    The Paloma Haven sofa is a masterpiece of minimalism and luxury.
                </h1>
                <Link href="#">
                    <span className="underline">
                        See more out of ‘Modern Luxe’ collection
                    </span>
                </Link>
            </div>
        </div>
    )
}