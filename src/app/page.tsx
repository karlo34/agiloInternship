"use client";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Image from "next/image";
import CollectionSection from "./components/CollectionSection";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from './components/types';

export default function Home() {
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
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-screen max-w-full aspect-[16/9] -z-10">
        <Image
          src="/slike/Scandinavian_Simplicity.png"
          alt="404 Not Found"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <Navbar />
      <div className="w-full aspect-[16/9]"></div>
      <div className="flex flex-wrap items-center justify-between mx-[6%] leading-[1.4] gap-y-5">
        <div className="w-150 mb-10 md:mb-10 lg:mb-10 xl:mb-0 gap-40">
          <h1 className="text-5xl font-medium">
            Elevate Your Living Space with <br /> Unmatched Comfort & Style
          </h1>
        </div>
        <div className="text-2xl w-135">
          <p>
            Discover Your Perfect Sofa Today
          </p>
          <a href="/" className="underline">Explore Now</a>
        </div>
      </div>

      <div className="mx-[6%] mt-[144px]">
        <h1 className="text-5xl font-medium">Our products</h1>
        <div className="flex items-center justify-between mt-[59px] gap-3">
          <div className="relative w-[250px] h-[280px] md:w-100 md:h-[300px] lg:w-[600px] lg:h-[400px]">
            <Image
              src="/slike/Nordic_Haven.jpg"
              alt="Sofa"
              fill
              className="object-cover"
            />
            <p className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-center">Sofas</p>
          </div>
          <div className="relative w-[250px] h-[280px] md:w-100 md:h-[300px] lg:w-[600px] lg:h-[400px]">
            <Image
              src="/slike/Belime_Haven.png"
              alt="Arm Chair"
              fill
              className="object-cover"
            />
            <p className="absolute bottom-[-30px] lg:bottom-[-30px] left-1/2 -translate-x-1/2 text-center">Arm Chairs</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8 mt-15">
          <h1 className="sm:text-5xl big-body sm:title text-2xl">
            Collections
          </h1>
          <div className="hidden sm:flex gap-2">
            <button className="group flex items-center justify-center w-10 h-10 border border-black hover:cursor-pointer hover:bg-black rounded-full">
              <ArrowLeftIcon className="w-5 h-5 text-black group-hover:text-white" />
            </button>
            <button className="group flex items-center justify-center hover:cursor-pointer w-10 h-10 border border-black hover:bg-black rounded-full">
              <ArrowRightIcon className="w-5 h-5 text-black group-hover:text-white" />
            </button>
          </div>
          <button className="flex sm:hidden items-center justify-center w-[75px] h-[32px] rounded-sm text-xs font-medium text-white bg-black">
            View All
          </button>
        </div>
        <div className="-mx-[6%]">
          {
            products && (
              <CollectionSection products={products ?? []} maxItems={4} />
            )
          }
        </div>
        <div>
          <h1 className="text-5xl font-medium mt-36 mb-16">About Sofa Society</h1>
          <div className="relative h-60 [@media(min-width:600px)_and_(max-width:767px)]:h-80 md:h-110 lg:h-[702px] w-full">
            <Image
              src='/slike/home.png'
              fill
              alt="About Sofa Society"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between h-90 mt-16 mb-80 md:mb-60 lg:mb-[100px]">
          <div className="self-start w-150">
            <h1 className="text-5xl font-medium leading-[1.4] mb-6 lg:mb-0">At Sofa Society, we believe that a sofa is the heart of every home.</h1>
          </div>
          <div className="text-2xl self-end gap-10 w-135">
            <p className="leading-[1.4]">
              We are dedicated to delivering high-quality, thoughtfully designed sofas that merge comfort and style effortlessly.
            </p>
            <br />
            <p className="leading-[1.4]">
              Our mission is to transform your living space into a sanctuary of relaxation and beauty, with products built to last.
            </p>
            <p className="mt-3"><a href="/" className="underline">Read more about Sofa Society</a></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
