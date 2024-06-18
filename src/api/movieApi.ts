import axios, { AxiosInstance } from "axios";
import { MovieType } from "../types/movieType";
import { ApiResponseType } from "../types/responseType";
import { SortEnumType } from "../types/sortType";

export type RequestData = {
   genres: string[];
   year: number[];
   page: number;
   sortType: SortEnumType;
};

class ApiClient {
   private apiKey: string;
   private instance: AxiosInstance;
   constructor(apiKey: string) {
      this.apiKey = apiKey;
      this.instance = axios.create({
         baseURL: "https://api.kinopoisk.dev/v1.4/",
         headers: { "X-API-KEY": this.apiKey },
      });
   }
   private parseDataToQuery(data: RequestData) {
      const params = new URLSearchParams();
      params.append("limit", "50");
      params.append("notNullFields", "name");
      params.append("notNullFields", "rating.kp");
      params.append("notNullFields", "poster.url");
      params.append("type", "movie");
      // Передача номера страницы
      params.append("page", data.page.toString());

      // Передача диапазона лет
      if (data.year.length == 2) {
         let str = data.year[0].toString();
         str += "-";
         str += data.year[1].toString();
         params.append("year", str);
      } else {
         throw new Error("year range will have 2 length");
      }

      // Фильтр по жанрам
      data.genres.forEach((genre) => {
         params.append("genres.name", genre.toLowerCase());
      });

      // Сортировка
      if (
         data.sortType === SortEnumType.AlphabetAsc ||
         data.sortType === SortEnumType.AlphabetDesc
      ) {
         params.append("sortField", "name");
         params.append(
            "sortType",
            data.sortType === SortEnumType.AlphabetAsc ? "1" : "-1"
         );
      } else if (
         data.sortType === SortEnumType.RatingAsc ||
         data.sortType === SortEnumType.RatingDesc
      ) {
         params.append("sortField", "rating.kp");
         params.append(
            "sortType",
            data.sortType === SortEnumType.RatingAsc ? "1" : "-1"
         );
      }

      return decodeURI(params.toString());
   }

   public async fetchMovies(data: RequestData) {
      const queryParams = this.parseDataToQuery(data);

      const res = await this.instance.get<ApiResponseType>(
         `/movie?${queryParams}`
      );
      return res.data;
   }
}

/* export const fetchMoviesMock = async () => {
   return new Promise<MovieType[]>((resolve) => {
      setTimeout(() => resolve(movies), 500);
   });
}; */

/* export const fetchMovies = async () => {
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
}; */

const apiClient = new ApiClient(import.meta.env.VITE_API_KEY);
export default apiClient;
