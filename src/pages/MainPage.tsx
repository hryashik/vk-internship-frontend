import { useCallback, useEffect, useState } from "react";
import { MovieType } from "../types/movieType";
import { fetchMovies } from "../api/movieApi";
import MovieList from "../components/MovieList";
import FilterGenreComponent from "../components/FilterComponent/FilterComponent";

const MainPage = () => {
   const [movies, setMovies] = useState<MovieType[]>([]);
   const [error, setError] = useState<boolean>(false);
   const [genres, setGenre] = useState<string[]>([
      "Комедия",
      "Драма",
      "Триллер",
      "Боевик",
      "Ужасы",
      "Детектив",
      "Криминал",
   ]);

   const memoizedSetGenre = useCallback((value: string[]) => {
      setGenre([...value]);
   }, []);
   //const [page, setPage] = useState<number>(1);
   useEffect(() => {
      fetchMovies()
         .then((data) => {
            console.log(data);
            setMovies(data.docs);
         })
         .catch((e) => {
            console.error(e);
            setError(true);
         });
   }, []);
   if (error) {
      return (
         <>
            <h1>Произошла ошибка...</h1>
         </>
      );
   }
   return (
      <div>
         <div>
            <FilterGenreComponent
               genres={genres}
               clickOnGenre={memoizedSetGenre}
            />
         </div>
         <MovieList movies={movies} />
      </div>
   );
};

export default MainPage;
