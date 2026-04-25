import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import LatestMovies from "@/components/sections/LatestMovies";
import MovieList from "@/components/sections/MovieList";
import PopularMovies from "@/components/sections/PopularMovies";
import PremiumCta from "@/components/sections/PremiumCta";
import TrendingMovies from "@/components/sections/TrendingMovies";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MovieList />
      <LatestMovies />
      <PremiumCta />
      <TrendingMovies />
      <Contact />
      <PopularMovies />
      <Footer />
    </main>
  );
}
