import { MovieType } from "../types/movieType";

const movies: MovieType[] = [
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
   { rating: 9, title: "Title", year: 2005 },
];

export const fetchMovies = async () => {
   return new Promise<MovieType[]>((resolve) => {
      setTimeout(() => resolve(movies), 500);
   });
};
