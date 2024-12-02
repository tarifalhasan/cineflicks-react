import SearchBar from "../ui/SearchBar";
import Container from "./Container";
import ConnectWalletButton from "../ui/ConnectWalletButton";
import ProfileButton from "../ui/ProfileButton";

const Header = () => {
  return (
    <Container>
      <header>
        <div className="flex justify-between items-center mt-5 w-full">
          {/* Logo */}
          <div className="flex gap-3">
            <img src="../assets/logomain.png" alt="Logo" width={43} />
            <img src="../assets/logofull.png" alt="Logo" width={159} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex text-[16px] space-x-7 font-normal">
            <a href="#" className="hover:text-primary transition duration-300">
              Home
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              Movies
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              Web Series
            </a>
            <a href="#" className="hover:text-primary transition duration-300">
              Genres
            </a>
          </nav>

          {/* Button and Mobile Menu Icon */}
          <div className="flex items-center space-x-4">
            <SearchBar></SearchBar>
            <ConnectWalletButton></ConnectWalletButton>
            <ProfileButton></ProfileButton>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
