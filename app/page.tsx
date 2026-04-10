import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LatestMovies from "@/components/sections/LatestMovies";
import MovieList from "@/components/sections/MovieList";
import PopularMovies from "@/components/sections/PopularMovies";
import TrendingMovies from "@/components/sections/TrendingMovies";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MovieList />
      <LatestMovies />
      <TrendingMovies />
      <PopularMovies />
      <Footer />
    </main>
  );
}
