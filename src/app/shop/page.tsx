import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Collections from "../components/Collections";

const Shop = () => {
    return (
        <div className="min-h-[100vh]">
            <div className="mx-[6%]">
                <Navbar />
                <div className="flex flex-col items-center">
                    <Collections />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop;