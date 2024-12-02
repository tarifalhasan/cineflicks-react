import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative  w-[320px]  inline-flex items-center h-[42px] rounded-[8px] bg-[#33363C]">
      <IoIosSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#C4C4C4] w-8 h-6" />
      <input
        type="text"
        className="w-full pl-12 pe-3 text-base focus:outline-none bg-[#33363C]"
        placeholder="Search shows, movies, genres, etc."
      />
    </div>
  );
};

export default SearchBar;
