import Navbar from "../components/Nav";
import Footer from "../components/Footer";

import style from "../css/register.module.css"; // Importing the CSS module for styling
import Image from "next/image";
export default function RegisterPage() {
    return (
        <div>
            <Navbar />
            <div className="mx-[0] flex flex-wrap mt-10 gap-y-5 md:mt-0">
                <div className="w-full relative md:w-1/2 lg:w-1/2 bg-amber-500 h-[30rem] md:h-[51rem]">
                    <Image
                        src="/slike/Scandinavian_Simplicity.png"
                        alt="Scandinavian Simplicity Image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center">
                    <section className="w-[24rem]">
                        <h1 className="text-5xl font-medium  mb-20">Hey, welcome to Sofa Society!</h1>
                        <form action="" className="flex flex-col gap-y-[0.5rem]">
                            <div className="mb-4 flex gap-6">
                                <input type="text" id="name" name="name" placeholder="First name" required className={style.input} />
                                <input type="text" id="surname" name="surname" placeholder="Last name" required className={style.input} />
                            </div>
                            <div className="mb-4">
                                <input type="email" id="email" name="email" required placeholder="Email" className={style.input} />
                            </div>
                            <div className="mb-4">
                                <input type="password" id="password" name="password" placeholder="Password" required className={style.input} />
                            </div>
                            <div className="mb-4">
                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required className={style.input} />
                            </div>
                            <button type="submit" className={style.button}>Register</button>
                        </form>
                            <p className="text-[#808080] mt-16">Already have an account? No worries, just <a href="" className="text-[#050505] underline bold">log in</a></p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// gap278px