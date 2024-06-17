import axios from "axios";
import { MovieType } from "../types/movieType";
import { ApiResponseType } from "../types/responseType";

const movies: MovieType[] = [];

export const fetchMoviesMock = async () => {
   return new Promise<MovieType[]>((resolve) => {
      setTimeout(() => resolve(movies), 500);
   });
};

export const fetchMovies = async () => {
   const apiKey = import.meta.env.VITE_API_KEY;
   const res = await axios.get<ApiResponseType>(
      "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&year=1990-2024&notNullFields=name&notNullFields=rating.kp&notNullFields=poster.url&type=movie&rating.kp=1-10",
      {
         headers: {
            "X-API-KEY": apiKey,
         },
      }
   );
   return res.data;
};
