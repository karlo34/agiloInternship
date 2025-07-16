import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {
  return (
    <div className=" flex flex-col md:flex-row h-auto md:h-[656px] mt-50 mx-[6%]">
      {/* Image Container */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Image
          src="/slike/details_img2.png"
          alt="an image of a product"
          width={492}
          height={656}
          className="w-full md:w-[492px] h-auto"
        />
      </div>
      {/* Text Container */}
      <div className="w-full sm:w-2/3 px-4 sm:pl-16 py-4">
        <h1 className="text-2xl md:text-5xl sm:font-medium font-normal leading-[140%]">
          The Paloma Haven sofa is a masterpiece of minimalism and luxury.
        </h1>
        <Link href="#" className="mt-10 block"> {/* Make the link a block element */}
          <span className="underline text-base md:text-2xl">
            See more out of ‘Modern Luxe’ collection
          </span>
        </Link>
      </div>

    </div>
  );
}