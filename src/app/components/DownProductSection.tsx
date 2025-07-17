import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {
  return (
    <div className="flex flex-col md:flex-row h-auto sm:mt-20 mt-10 mx-[6%]">
      {/* Image Container */}
      <div className="w-full md:w-1/3 flex sm:justify-center justify-start items-center">
        <Image
          src="/slike/details_img2.png"
          alt="an image of a product"
          width={492}      // intrinsic size for optimised loading
          height={656}
          className="w-[240px] h-[343px] md:w-[492px] md:h-[656px] object-cover"
        />
      </div>
      {/* Text Container */}
      <div className="w-3/4 sm:w-2/3 sm:px-4 px-0 sm:pl-30 py-4 sm:pt-20 pt-10">
        <h1 className="text-2xl md:text-5xl sm:font-medium font-normal leading-[140%]">
          The Paloma Haven sofa is a masterpiece of minimalism and luxury.
        </h1>
        <Link href="#" className="sm:mt-10 mt-7 block">
          <span className="underline text-base md:text-2xl">
            See more out of ‘Modern Luxe’ collection
          </span>
        </Link>
      </div>

    </div>
  );
}