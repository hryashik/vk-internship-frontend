import { useCallback, useEffect, useState } from "react";
import { MovieType } from "../types/movieType";
import apiClient from "../api/movieApi";
import MovieList from "../components/MovieList";
import FilterGenreComponent from "../components/FilterComponent/FilterComponent";
import SortComponent from "../components/SortComponent/SortComponent";
import { SortEnumType } from "../types/sortType";
import YearSlider from "../components/YearSlider/YearSlider";
import MovieListSkeleton from "../components/MovieItemSkeleton";
import PaginationComponent from "../components/ui/PaginationComponent";
import SearchComponent from "../components/SearchComponent/SearchComponent";

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
   const [fetchingStatus, setFetchingStatus] = useState<boolean>(false);
   const [movies, setMovies] = useState<MovieType[]>([]);
   const [error, setError] = useState<boolean>(false);
   const [sortType, setSortType] = useState<SortEnumType>(
      SortEnumType.RatingDesc
   );
   const [yearRange, setYearRange] = useState<number[]>([1990, 2024]);
   const [genres, setGenre] = useState<string[]>([
      "Комедия",
      "Драма",
      "Триллер",
      "Боевик",
      "Ужасы",
      "Детектив",
      "Криминал",
   ]);
   const [page, setPage] = useState<number>(1);
   const [totalPages, setTotalPages] = useState<number>(1);

   const memoizedSetGenre = useCallback((value: string[]) => {
      setGenre([...value]);
   }, []);

   const memoizedSetSortType = useCallback((value: SortEnumType) => {
      setSortType(value);
   }, []);

   const memoizedSetYearRange = useCallback((value: number[]) => {
      setYearRange(value);
   }, []);

   const memoizedSetPage = useCallback((value: number) => {
      setPage(value);
   }, []);

   useEffect(() => {
      setFetchingStatus(true);
      /* fetchMoviesMock()
         .then((value) => setMovies(value))
         .catch(() => setError(true));*/
      /* apiClient
         .fetchMovies({ genres, page, year: yearRange, sortType })
         .then((data) => {
            setMovies(data.docs);
            setTotalPages(data.pages);
         })
         .catch((e) => {
            console.error(e);
            setError(true);
         })
         .finally(() => setFetchingStatus(false)); */
   }, [genres, yearRange, sortType, page]);

   if (error) {
      return (
         <>
            <h1>Произошла ошибка...</h1>
         </>
      );
   }

   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}
      >
         <SearchComponent />
         <div
            style={{
               width: "100%",
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
            }}
         >
            <FilterGenreComponent
               names={genreNames}
               genres={genres}
               clickOnGenre={memoizedSetGenre}
            />
            <YearSlider value={yearRange} setValue={memoizedSetYearRange} />
            <SortComponent
               sortType={sortType}
               setSortType={memoizedSetSortType}
            />
         </div>
         {fetchingStatus ? (
            <MovieListSkeleton />
         ) : (
            <MovieList movies={movies} />
         )}
         <PaginationComponent
            total={totalPages}
            currentPage={page}
            setCurrentPage={memoizedSetPage}
         />
      </div>
   );
};

export default MainPage;
