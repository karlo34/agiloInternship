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
            <div className="w-[20rem] md:w-[44.25rem] mx-[6%] my-26">
                <h1 className="text-2xl font-normal md:text-5xl md:font-medium leading-[1.4] pb-10">We are here to make your living space a true reflection of your personal style.</h1>
                <p className="pr-0 md:pr-55 leading-[1.4]">
                    At the heart of our brand is a deep commitment to quality. We understand that a sofa isn’t just another piece of furniture; it’s where you unwind, gather with loved ones, and make memories. That’s why we source only the finest materials and fabrics, ensuring that every sofa we offer is built to last.
                    <br /><br />
                    From luxurious leathers and soft linens to high-performance textiles, each fabric is carefully selected for its durability and beauty. Our attention to detail extends to every stitch and seam, guaranteeing that your sofa will not only look stunning but will also withstand the test of time.
                </p>
            </div>
            <div className="flex flex-wrap mx-[6%] justify-center md:justify-between ">
                <div className="relative h-[20rem] md:h-[32rem] lg:h-[50rem] w-full md:w-[22rem] lg:w-[32rem]">
                    <Image
                        src="/slike/details_img.png"
                        alt="Our Design Philosophy"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-full md:w-[19rem] lg:w-[25rem] mt-16 md:mt-0 md:px-0">
                    <p className="pb-10 md:pb-20 lg:pb-36">Our design philosophy revolves around creating pieces that are both beautiful and practical. Inspired by Scandinavian simplicity, modern luxury, and timeless classics, our collections are curated to suit a wide variety of tastes and lifestyles. We understand that every home is different, so we offer a diverse range of styles, colors, and textures to help you find the perfect fit. Whether you prefer sleek modern lines or soft, inviting silhouettes, we have something to suit every space and personality.</p>
                    <p>We believe that great design should be environmentally conscious, which is why we strive to minimise our environmental footprint through responsible sourcing and production practices. Our commitment to sustainability ensures that our products are not only beautiful but also kind to the planet.</p>

                </div>
            </div>
            <h2 className="text-2xl font-normal md:text-5xl leading-[1.4] text-center mx-[6%] my-16">
                Our commitment to sustainability ensures that our products are not only beautiful but also kind to the planet.
            </h2>
            <div className="relative md:w-full h-85 md:h-[35rem] lg:h-[55rem] mx-[6%] md:mx-0">
                <Image
                    src="/slike/aboutUs2.png"
                    alt="Sofa Society"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-wrap justify-between mx-[6%]">
                <div className="sm:w-full md:w-3/5 md:mr-7">
                    <h2 className="text-2xl font-normal md:text-5xl leading-[1.4] text-center my-16">
                        Our customers are at the center of everything we do!
                    </h2>
                </div>
                <div className="w-full md:w-1/3 md:pt-40">
                    <p className="leading-[1.4]">Our team is here to help guide you through the process, offering personalised support to ensure that you find exactly what you’re looking for.
                    </p>
                    <p className="leading-[1.4]">We’re not just selling sofas – we’re helping you create spaces where you can relax, recharge, and make lasting memories. Thank you for choosing Sofa Society to be a part of your home!</p>
                </div>
            </div>
            <h1 className="text-2xl font-normal md:text-5xl leading-[1.4] text-center mx-[6%] my-16">
                Thank you for choosing Sofa Society to be a part of your home!
            </h1>
            <div className="relative w-full z-10">
                <Footer />
            </div>
        </div>
    )
}