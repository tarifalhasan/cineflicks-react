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
  return (
    <div className="flex my-[43px]">
      {category.map((category, index) => (
        <button
          key={index}
          className={`  text-[16px] px-[31px] py-[13px] rounded-full font-[700] ${
            category === "Movies"
              ? "bg-primary text-black" // Active button styles
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
