

const Footer = () => {
    return (
        <footer className="bg-[#F4F4F4] mt-[75vh]">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="order-1 lg:order-3 w-full lg:max-w-xs">
          <h2 className="text-2xl font-semibold mb-2">Join our newsletter</h2>
          <p className="text-sm mb-4">
            We will also send you our discount coupons!
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 text-sm rounded-l-md border focus:outline-none focus:ring focus:ring-black/40 placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium text-white bg-black rounded-r-md"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-xs leading-relaxed">
            By subscribing you agree to with our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and provide consent to receive updates from our company.
          </p>
        </div>

        {/* ───────── Logo & copyright (2nd mobile, 1st desktop) ───────── */}
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl font-semibold leading-none">
            Sofa
            <br />
            Society
            <br />
            Co.
          </h1>
          <p className="mt-4 text-xs">© 2024, Sofa Society</p>
        </div>

        {/* ───────── Links (3rd mobile, 2nd desktop) ───────── */}
        <div className="order-3 lg:order-2">
          <div className="grid grid-cols-3 gap-x-12 text-sm">
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Help</li>
              <li>Delivery</li>
              <li>Returns</li>
            </ul>

            <ul className="space-y-2">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>Pinterest</li>
              <li>Facebook</li>
            </ul>

            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer;