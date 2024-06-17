import { useCallback, useEffect, useState } from "react";
import { MovieType } from "../types/movieType";
import { fetchMovies } from "../api/movieApi";
import MovieList from "../components/MovieList";
import FilterGenreComponent from "../components/FilterComponent/FilterComponent";
import SortComponent from "../components/SortComponent/SortComponent";
import { SortEnumType } from "../types/sortType";

const genreNames = [
   "Комедия",
   "Драма",
   "Триллер",
   "Боевик",
   "Ужасы",
   "Детектив",
   "Криминал",
];

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
   const [sortType, setSortType] = useState<SortEnumType>(
      SortEnumType.RatingDesc
   );

   const memoizedSetGenre = useCallback((value: string[]) => {
      setGenre([...value]);
   }, []);

   const memoizedSetSortType = useCallback((value: SortEnumType) => {
      setSortType(value);
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
         <div style={{ display: "flex", alignItems: "start" }}>
            <FilterGenreComponent
               names={genreNames}
               genres={genres}
               clickOnGenre={memoizedSetGenre}
            />
            <SortComponent
               sortType={sortType}
               setSortType={memoizedSetSortType}
            />
         </div>
         <MovieList movies={movies} />
      </div>
   );
};

export default MainPage;
