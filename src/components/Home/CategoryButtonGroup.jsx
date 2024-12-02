import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CategoryButtonGroup = ({ onTabSelect }) => {
  const [activeTab, setActiveTab] = useState("For You");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const scrollRef = useRef(null);

  const tabs = [
    "For You",
    "Reality",
    "Big Boss",
    "Top Free Movies",
    "Premium",
    "Top 10",
    "Studios",
    "Live",
    "New Releases",
    "Trending",
    "Comedy",
    "Drama",
    "Documentaries",
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabSelect(tab);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div className="relative container mt-9 mb-4">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#F2AA4C] bg-opacity-90 p-2 rounded-full text-white hidden md:flex"
            onClick={() => scroll("left")}
          >
            <FiChevronLeft size={20} />
          </button>
        )}

        {/* Scrollable Tab List */}
        <div
          ref={scrollRef}
          className="flex l space-x-4 overflow-x-auto p-4 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 min-w-max rounded-full font-medium ${
                activeTab === tab
                  ? "bg-[#F2AA4C] text-black"
                  : "bg-[#575757] text-white"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#F2AA4C] bg-opacity-90 p-2 rounded-full text-white hidden md:flex"
          onClick={() => scroll("right")}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </>
  );
};

export default CategoryButtonGroup;
