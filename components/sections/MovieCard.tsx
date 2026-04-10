import { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.genre}</p>
        <p className="text-yellow-400">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;