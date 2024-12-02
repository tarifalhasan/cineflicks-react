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
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold relative text-xl font-ar-one-sans lg:text-3xl l">
          Watch In Your Language
        </h2>
      </div>

      <div className="mt-6 lg:mt-10">
        <div className="flex items-center  gap-6 flex-wrap text-center">
          {LanguageCategoryData.map((movie, index) => (
            <div
              key={index}
              className="text-center relative overflow-hidden rounded-lg bg-black w-[135px] py-4 px-4 h-[130px] items-center gap-1 flex flex-col justify-center"
            >
              <div>
                <img
                  src={movie.image}
                  alt={`Poster of ${movie.name}`}
                  className="mx-auto object-contain max-h-[70px] w-[68px] h-auto"
                />
                <h2 className=" text-sm lg:text-lg font-medium">
                  {movie.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageCategory;
