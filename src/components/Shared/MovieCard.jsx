import { Link } from "react-router-dom";

const MovieCard = ({ imgSrc, name, slug }) => {
  return (
    <Link to={`/movie/${slug}`} className="w-full">
      <div>
        <img
          src={imgSrc}
          alt={`Poster of ${name}`}
          className="w-full h-[240px] md:h-[300px] object-cover rounded-md"
        />
        <h4 className="mt-2 text-base lg:text-lg font-medium">{name}</h4>
      </div>
    </Link>
  );
};

export default MovieCard;
