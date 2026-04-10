import { Movie } from "@/types/movie";

const isProduction = process.env.NODE_ENV === "production"

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    image: isProduction ? "./inception.avif" : "/inception.avif",
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Interstellar",
    image: isProduction ? "./interstellar.avif" : "/interstellar.avif",
    rating: 8.6,
    genre: "Adventure",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: isProduction ? "./dark-knight.avif" : "/dark-knight.avif",
    rating: 9.0,
    genre: "Action",
  },
];

export const popularMovies: Movie[] = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: isProduction ? "./endgame.avif" : "/endgame.avif",
    rating: 8.4,
    genre: "Action",
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    image: isProduction ? "./endgame.avif" : "/endgame.avif",
    rating: 8.4,
    genre: "Action",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    image: isProduction ? "./endgame.avif" : "/endgame.avif",
    rating: 8.4,
    genre: "Action",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    image: isProduction ? "./endgame.avif" : "/endgame.avif",
    rating: 8.4,
    genre: "Action",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    image: isProduction ? "./endgame.avif" : "/endgame.avif",
    rating: 8.4,
    genre: "Action",
  },
];

export const trendingMovies: Movie[] = [
  {
    id: 1,
    title: "Dune",
    image: isProduction ? "./dune.jpg" : "./dune.jpg",
    rating: 8.1,
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Dune",
    image: isProduction ? "./dune.jpg" : "./dune.jpg",
    rating: 8.1,
    genre: "Sci-Fi",
  },
  {
    id: 3,
    title: "Dune",
    image: isProduction ? "./dune.jpg" : "./dune.jpg",
    rating: 8.1,
    genre: "Sci-Fi",
  },
  {
    id: 4,
    title: "Dune",
    image: isProduction ? "./dune.jpg" : "./dune.jpg",
    rating: 8.1,
    genre: "Sci-Fi",
  },
  {
    id: 5,
    title: "Dune",
    image: isProduction ? "./dune.jpg" : "./dune.jpg",
    rating: 8.1,
    genre: "Sci-Fi",
  },
];

export const latestMovies: Movie[] = [
  {
    id: 1,
    title: "Oppenheimer",
    image: isProduction ? "./oppenheimer.jpg" : "/oppenheimer.jpg",
    rating: 8.6,
    genre: "Drama",
  },
  {
    id: 2,
    title: "Oppenheimer",
    image: isProduction ? "./oppenheimer.jpg" : "/oppenheimer.jpg",
    rating: 8.6,
    genre: "Drama",
  },
  {
    id: 3,
    title: "Oppenheimer",
    image: isProduction ? "./oppenheimer.jpg" : "/oppenheimer.jpg",
    rating: 8.6,
    genre: "Drama",
  },
  {
    id: 4,
    title: "Oppenheimer",
    image: isProduction ? "./oppenheimer.jpg" : "/oppenheimer.jpg",
    rating: 8.6,
    genre: "Drama",
  },
];