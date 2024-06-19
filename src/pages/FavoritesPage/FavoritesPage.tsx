import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import { MovieType } from "../../types/movieType";
import apiClient from "../../api/movieApi";
import { SortEnumType } from "../../types/sortType";
import MovieListSkeleton from "../../components/MovieItemSkeleton";
import styles from "./FavoritesPage.module.css";
import { getMoviesFromLocalStorage } from "../../utilities/getMoviesFromLocalStorage";

const FavoritesPage = () => {
   const [movies, setMovies] = useState<MovieType[]>([]);
   const [error, setError] = useState<boolean>(false);
   const [fetching, setIsFetching] = useState<boolean>(false);
   const [page, setPage] = useState<number>(1);

   useEffect(() => {
      const ids = getMoviesFromLocalStorage();
      if (ids.length) {
         setIsFetching(true);
         apiClient
            .fetchMovies({
               genres: [],
               page,
               sortType: SortEnumType.AlphabetAsc,
               year: [1990, 2024],
               id: ids,
            })
            .then((data) => {
               setMovies(data.docs);
               setPage(data.page);
            })
            .catch((e) => {
               console.error(e);
               setError(true);
            })
            .finally(() => setIsFetching(false));
      }
   }, [page]);

   if (error) {
      return (
         <div className={styles.container}>
            <div className={styles.container__inner}>
               <h3>
                  Произошла ошибка, вероятно, что закончились запросы на
                  токене...
               </h3>
            </div>
         </div>
      );
   }

   return (
      <div className={styles.container}>
         <div className={styles.container__inner}>
            <div className={styles.title}>
               <h3>Избранное</h3>
            </div>
            {!fetching ? <MovieList movies={movies} /> : <MovieListSkeleton />}
         </div>
      </div>
   );
};

export default FavoritesPage;
