

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] mt-[10vh]">
      <div className="max-w-7xl px-6 sm:mx-auto mx-[6%] py-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="order-1 lg:order-3 w-full lg:max-w-xs">
          <h2 className="sm:text-[32px] sm:font-medium text-2xl font-normal mb-2">Join our newsletter</h2>
          <p className="sm:text-base text-xs mb-4">
            We will also send you our discount coupons!
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 text-xs rounded-sm bg-[#FDFDFD]"
            />
            <button
              type="submit"
              className="px-5 py-2 text-xs font-medium text-white bg-black rounded-sm h-9 ml-2"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-xs font-normal leading-[140%] text-gray-500">
            By subscribing you agree to with our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and provide consent to receive updates from our company.
          </p>
        </div>

        <div className="order-2 lg:order-1 sm:mt-0 mt-8">
          <h1 className="sm:text-[40px] text-[32px] font-medium sm:leading-[90%] leading-[100%]">
            Sofa
            <br />
            Society
            <br />
            Co.
          </h1>
          <p className="mt-4 text-xs font-normal">© 2024, Sofa Society</p>
        </div>

        <div className="order-3 lg:order-2 sm:mt-2 mt-0">
          <div className="grid grid-cols-3 gap-x-12 sm:text-base text-xs font-normal">
            <ul className="space-y-4 leading-[1.4]">
              <li>FAQ</li>
              <li>Help</li>
              <li>Delivery</li>
              <li>Returns</li>
            </ul>

            <ul className="space-y-4 leading-[1.4]">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>Pinterest</li>
              <li>Facebook</li>
            </ul>

            <ul className="space-y-4 leading-[1.4]">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;