import { useRef } from "react";
import { FaDiscord, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
      })
      .catch((err) => console.log(err));
  };
  return (
    <footer className="bg-[#464343]">
      <div className="container">
        {/* Newsletter */}
        <div className="pt-16 ">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mx-auto rounded-lg  bg-white flex relative max-w-md gap-x-4"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
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
                <Link
                  to="/"
                  className="flex md:justify-center lg:col-span-1 gap-3"
                >
                  <Logo />
                </Link>
              </div>
              <div className="grid  gap-y-4 justify-items-end text-5xl gap-4">
                <div className="text-black flex flex-row lg:flex-col justify-center lg:justify-stretch gap-6 lg:gap-0">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center my-3"
                  >
                    <FaDiscord className="text-2xl" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center my-3"
                  >
                    <FaTelegramPlane className="text-2xl" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center my-3"
                  >
                    <FaXTwitter className="text-2xl" />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-opacity-60 transition-all duration-700  rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center my-3"
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
