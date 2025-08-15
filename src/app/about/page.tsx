import Navbar from "../components/Nav";
import Footer from "../components/Footer";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative">
            {/* Navbar should stay at the top */}
            <Navbar />
            <div className="relative md:absolute top-0 left-0 w-full h-[20rem] md:h-[45rem] z-0 mt-5 md:mt-0">
                <Image
                    src="/slike/aboutUs.png"
                    alt="About Us"
                    fill
                    className="object-cover"
                />
            </div>


            {/* Content wrapper with dynamic top padding to avoid overlap on md+ */}
            <div className="relative z-10 pt-0 md:pt-[45rem]">
                <Footer />
            </div>
        </div>
    )
}