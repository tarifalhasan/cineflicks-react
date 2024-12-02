const LanguageCategoryData = [
  {
    name: "Hindi",
    image: "/assets/languages/hindi 1.png",
  },
  {
    name: "Marathi ",
    image: "/assets/languages/pngegg (1) 1.png",
  },
  {
    name: "Kannada",
    image: "/assets/languages/Kannada 1.png",
  },
  {
    name: "Tamil",
    image: "/assets/languages/tamil 1.png",
  },
  {
    name: "English",
    image: "/assets/languages/english 1.png",
  },
];

const LanguageCategory = () => {
  return (
    <div className="mt-[68px]">
      <div className="flex justify-between">
        <h1 className="font-bold text-[30px]">Watch In Your Language</h1>
      </div>

      <div className=" mt-[20px]">
        {/* Scrollable Grid Container */}
        <div className="flex items-center gap-x-[18px] text-center">
          {LanguageCategoryData.map((movie, index) => (
            <div
              key={index}
              className="text-center rounded-lg bg-black w-[140px] py-4 px-4 h-[134px] flex flex-col justify-end"
            >
              <img
                src={movie.image}
                alt={`Poster of ${movie.name}`}
                className="mx-auto"
              />
              <h2 className="mb-2 text-[22px] font-medium">{movie.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageCategory;
