import Navbar from "./components/Nav";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="mx-[6%]">
        <div className="flex justify-center items-center min-h-[30vh]">
          <h1>Home page</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
