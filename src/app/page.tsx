import Navbar from "./components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <div className="flex h-[90vh] justify-center">
        <h1>Home page</h1>
      </div>
    </div>
  );
}
