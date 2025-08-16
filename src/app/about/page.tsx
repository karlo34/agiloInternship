import Navbar from "../components/Nav";
import Footer from "../components/Footer";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative">
            <Navbar />
            <div className="relative md:absolute top-0 left-0 w-full h-[20rem] md:h-[45rem] z-0 mt-5 md:mt-0">
                <Image
                    src="/slike/aboutUs.png"
                    alt="About Us"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-wrap pt-0 md:pt-[35rem] pb-[9rem] md:min-h-[160vh] mx-[6%] justify-between">
                <div className="flex items-baseline max-w-4xl mx-auto py-4 md:py-16 w-[708px]">
                    <h1 className="text-2xl font-normal md:text-5xl md:font-medium mb-4 leading-[1.4]">At Sofa Society, we believe that a sofa is the heart of every home.</h1>
                </div>
                <div className="flex items-end justify-end max-w-4xl mx-auto py-8 md:py-16 w-[492px]">
                    <p className="text-lg md:text-xl leading-[1.4]">
                        Welcome to Sofa Society, where we believe that comfort and style should be effortlessly intertwined. Our mission is to help you create beautiful, functional spaces that bring warmth and relaxation into your home.
                        <br /><br />
                        Every piece in our collection is designed with care, blending timeless craftsmanship with modern aesthetics to offer you the perfect balance between form and function.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative h-[20rem] md:h-[32rem] lg:h-[44rem] w-full mx-[6%]">
                    <Image
                        src="/slike/Scandinavian_Simplicity.png"
                        alt="Scandinavian Simplicity"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-[44.25rem] mx-[6%] my-26">
                <h1 className="text-2xl font-normal md:text-5xl md:font-medium leading-[1.4] pb-10">We are here to make your living space a true reflection of your personal style.</h1>
                <p className="pr-55 leading-[1.4]">
                    At the heart of our brand is a deep commitment to quality. We understand that a sofa isn’t just another piece of furniture; it’s where you unwind, gather with loved ones, and make memories. That’s why we source only the finest materials and fabrics, ensuring that every sofa we offer is built to last.
                    <br /><br />
                    From luxurious leathers and soft linens to high-performance textiles, each fabric is carefully selected for its durability and beauty. Our attention to detail extends to every stitch and seam, guaranteeing that your sofa will not only look stunning but will also withstand the test of time.
                </p>
            </div>
            <div className="relative w-full z-10">
                <Footer />
            </div>
        </div>
    )
}

// 400 24