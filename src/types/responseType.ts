import { MovieType } from "./movieType";

export type ApiResponseType = {
   docs: MovieType[];
   limit: number;
   page: number;
   pages: number;
   total: number;
};
