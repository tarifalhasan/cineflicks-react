import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import ConnectWalletButton from "../ui/ConnectWalletButton";
import SearchBar from "../ui/SearchBar";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Movies" },
    { href: "#", label: "Web Series" },
    { href: "#", label: "Genres" },
  ];

  return (
    <header className="pb-4 pt-6 lg:pt-6 container">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="flex gap-3 items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex text-[16px] space-x-7 font-normal">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="hover:text-primary transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search, Connect Wallet, and Profile Buttons */}
        <div className="flex items-center space-x-4">
          <div className=" items-center gap-3 hidden md:inline-flex">
            <SearchBar />
            <div className="hidden sm:block">
              <ConnectWalletButton />
            </div>
          </div>
          <div className=" inline-flex">
            <div className="bg-[#33363C] flex justify-between space-x-4 items-center p-[9px] rounded-[8px]">
              <a href="">
                <img src="/assets/avatar.svg" />
              </a>
              <button onClick={() => setIsOpen((prev) => !prev)}>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetContent
                className="bg-black/50 backdrop-blur-lg border-none"
                side="right"
              >
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <to
                      key={link.label}
                      href={link.href}
                      className="text-lg text-white hover:text-primary transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </to>
                  ))}
                  <div className="pt-4 space-y-4">
                    <ConnectWalletButton />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
