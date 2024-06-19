import { getMoviesFromLocalStorage } from "./getMoviesFromLocalStorage";

export function deleteMovieFromLocalStorage(id: number) {
   const fieldName = "favorite-movies";
   const arr = getMoviesFromLocalStorage();
   localStorage.setItem(
      fieldName,
      JSON.stringify(arr.filter((el) => el != id)),
   );
}
