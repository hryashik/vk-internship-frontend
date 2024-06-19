/**
 * Извлекает массив ID фильмов из localStorage по ключу "favorite-movies".
 * Если массив не существует в localStorage, возвращает пустой массив.
 * @returns {number[]} Массив ID фильмов из localStorage.
 */
export function getMoviesFromLocalStorage() {
   const fieldName = "favorite-movies";

   const arr: number[] = JSON.parse(localStorage.getItem(fieldName) || "[]");
   return arr;
}
