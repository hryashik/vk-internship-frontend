import { useEffect, useState } from "react";
import { MovieType } from "../types/movieType";
import { fetchMovies } from "../api/movieApi";
import MovieList from "../components/MovieList";

const MainPage = () => {
   const [movies, setMovies] = useState<MovieType[]>([]);
   useEffect(() => {
      fetchMovies().then((movies) => setMovies(movies));
   }, []);
   return (
      <div>
         <MovieList movies={movies} />
      </div>
   );
};

export default MainPage;
