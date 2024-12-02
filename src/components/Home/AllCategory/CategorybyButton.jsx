import { useState } from "react";

const category = [
  "Movies",
  "Series",
  "Actions",
  "Anime",
  "Sci-Fi",
  "Kids",
  "Fiction",
  "Live",
  "Studios",
];

const CategorybyButton = () => {
  const [selectedCategory, setSelectedCategory] = useState("Movies");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-wrap  ">
      {category.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          className={`text-sm lg:text-base px-[31px]  py-3 rounded-full font-bold ${
            selectedCategory === category
              ? "bg-[#F2AA4C] text-black" // Active button styles
              : " text-white" // Inactive button styles
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorybyButton;
