import { FaDiscord, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Container from "./Container";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#464343]">
      <Container>
        {/* Newsletter */}
        <div className="pt-14 flex justify-center items-center">
          <div className="flex">
            <input
              type="text"
              className="border px-4 py-2 text-lg rounded-l-md rounded-r-none"
            />
            <button className="bg-primary text-white px-6 py-2 text-lg rounded-r-md rounded-l-none">
              Get Started
            </button>
          </div>
        </div>

        <div className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-5 ">
              <div>
                <p className="font-[700] text-[24px] text-white">FAQ</p>
                <ul className="mt-6 space-y-4 font-[500] text-[20px]">
                  <li>
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      About Cineflicks
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-[700] text-[24px] text-white">My Account</p>
                <ul className="mt-6 space-y-4 font-[500] text-[20px]">
                  <li>
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Premium Upgrades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Plans & Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-[700] text-[24px] text-white">
                  Supported Devices
                </p>
                <ul className="mt-6 space-y-4 font-[500] text-[20px]">
                  <li>
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition hover:opacity-75 text-gray-200"
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
              <div className="grid gap-y-4 justify-items-end text-5xl gap-4">
                <div className="text-black">
                  <div className="bg-primary p-6 rounded-full w-20 h-20 flex items-center justify-center my-3">
                    <FaDiscord className="text-6xl" />
                  </div>
                  <div className="bg-primary p-6 rounded-full w-20 h-20 flex items-center justify-center my-3">
                    <FaTelegramPlane />
                  </div>
                  <div className="bg-primary p-6 rounded-full w-20 h-20 flex items-center justify-center my-3">
                    <FaXTwitter />
                  </div>
                  <div className="bg-primary p-6 rounded-full w-20 h-20 flex items-center justify-center my-3">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <p className="py-[56px] text-center bg-primary font-[20px ]">
        &copy; 2024 Cineflicks All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
