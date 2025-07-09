import Navbar from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="mx-[6%]">
        <Navbar />
        <div className="flex justify-center">
          <h1>Home page</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
