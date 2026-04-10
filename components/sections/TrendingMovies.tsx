import { trendingMovies } from "@/data/movies";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  return (
    <section className="px-6 py-10 bg-black">
      <h2 className="text-white text-2xl font-bold mb-6">
        Trending Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;