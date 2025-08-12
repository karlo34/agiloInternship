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
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-screen -z-10">
        <Image
          src="/slike/Scandinavian_Simplicity.png"
          alt="404 Not Found"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <Navbar />
      <div className="flex items-center justify-between mx-[6%] leading-[1.4] mt-[100vh]">
        <div>
          <h1 className="text-5xl font-medium">
            Elevate Your Living Space with <br /> Unmatched Comfort & Style
          </h1>
        </div>
        <div className="text-2xl">
          <p>
            Discover Your Perfect Sofa Today
          </p>
          <a href="/" className="underline">Explore Now</a>
        </div>
      </div>

      <div className="mx-[6%] mt-[144px]">
        <h1 className="text-5xl font-medium">Our products</h1>
        <div className="flex items-center justify-between mt-[59px]">
          <div className="relative w-[600px] h-[400px]">
            <Image
              src="/slike/Nordic_Haven.jpg"
              alt="Sofa"
              fill
              className="object-cover"
            />
            <p className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-center">Sofas</p>
          </div>
          <div className="relative w-[600px] h-[400px]">
            <Image
              src="/slike/Belime_Haven.png"
              alt="Arm Chair"
              fill
              className="object-cover"
            />
            <p className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-center">Arm Chairs</p>
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
      </div>

      <Footer />
    </div>
  );
}
