import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ConnectWalletButton from "../ui/ConnectWalletButton";
import ProfileButton from "../ui/ProfileButton";
import SearchBar from "../ui/SearchBar";
import Container from "./Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Movies" },
    { href: "#", label: "Web Series" },
    { href: "#", label: "Genres" },
  ];

  return (
    <Container>
      <header className="py-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex gap-3 items-center">
            <img src="/assets/logomain.png" alt="Logo" width={43} height={43} />
            <img
              className=" lg:block"
              src="/assets/logofull.png"
              alt="Logo"
              width={159}
              height={43}
            />
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
              <ProfileButton />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
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
                      <ProfileButton />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
