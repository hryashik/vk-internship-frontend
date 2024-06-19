/**
 * Сохраняет ID фильма в localStorage в массиве с ключом "favorite-movies".
 * Если массив уже существует, добавляет новый ID в конец массива.
 * Если массив не существует, создает новый массив с данным ID.
 * @param {number} id - ID фильма для сохранения в localStorage.
 */

export function saveMovieInLocalStorage(id: number) {
   const nameField = "favorite-movies";
   const arr: number[] = JSON.parse(localStorage.getItem(nameField) || "[]");
   arr.push(id);
   localStorage.setItem(nameField, JSON.stringify(arr));
}
