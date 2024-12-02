import { FaDiscord, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#464343]">
      <div className="container">
        {/* Newsletter */}
        <div className="pt-16 ">
          <form className="mx-auto rounded-lg  bg-white flex relative max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required=""
              className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-lg bg-primary px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </button>
          </form>
        </div>

        <div className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-5 ">
              <div>
                <p className="font-inter text-lg lg:text-xl text-white font-bold">
                  FAQ
                </p>
                <ul className="text-base lg:text-lg font-normal hover:text-primary transition-all duration-500 mt-6">
                  <li>
                    <a
                      href="#"
                      className=" hover:text-primary transition-colors duration-500 text-gray-200"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" hover:text-primary transition-colors duration-500 text-gray-200"
                    >
                      About Cineflicks
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-inter text-lg lg:text-xl text-white font-bold">
                  My Account
                </p>
                <ul className="text-base lg:text-lg font-normal hover:text-primary transition-all duration-500 mt-6">
                  <li>
                    <a
                      href="#"
                      className=" hover:text-primary transition-colors duration-500 text-gray-200"
                    >
                      Premium Upgrades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" hover:text-primary transition-colors duration-500 text-gray-200"
                    >
                      Plans & Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-inter text-lg lg:text-xl text-white font-bold">
                  Supported Devices
                </p>
                <ul className="text-base lg:text-lg font-normal hover:text-primary transition-all duration-500 mt-6">
                  <li>
                    <a
                      href="#"
                      className=" hover:text-primary transition-colors duration-500 text-gray-200"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" hover:text-primary transition-colors duration-500 text-gray-200"
                    >
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-center lg:col-span-1 gap-3">
                  <img
                    src="/assets/logomain.png"
                    alt="Logo"
                    width={43}
                    className="h-auto"
                  />
                  <img
                    src="/assets/logofull.png"
                    alt="Logo"
                    width={159}
                    className="h-auto"
                  />
                </div>
              </div>
              <div className="grid  gap-y-4 justify-items-end text-5xl gap-4">
                <div className="text-black flex flex-row lg:flex-col justify-center lg:justify-stretch gap-6 lg:gap-0">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-16 h-16 flex items-center justify-center my-3"
                  >
                    <FaDiscord className="text-2xl" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-16 h-16 flex items-center justify-center my-3"
                  >
                    <FaTelegramPlane className="text-2xl" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-16 h-16 flex items-center justify-center my-3"
                  >
                    <FaXTwitter className="text-2xl" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-16 h-16 flex items-center justify-center my-3"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-[56px] text-center bg-primary font-[20px ]">
        &copy; 2024 Cineflicks All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
