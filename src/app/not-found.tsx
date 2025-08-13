import Navbar from "./components/Nav";
import Footer from "./components/Footer";
export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap items-center mx-[6%] justify-between h-90 lg:-mt-20">
                <div className="text-left w-140">
                    <h1 className="text-[56px] font-medium text-gray-800 self-baseline">404 <br /> Page Not Found</h1>
                </div>
                <div className="self-end w-140">
                    <p className="mt-4 text-gray-600">The page you are looking for doesn’t exist or <br /> an error occurred. Go back, or head over to <br /> our home page.</p>
                    <a href="/" className="mt-6 inline-block px-6 py-2 bg-[#050505] text-white rounded">
                        Go to Home
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}