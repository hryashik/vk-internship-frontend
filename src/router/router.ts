import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MoviePage from "../pages/MoviePage/MoviePage";

const router = createBrowserRouter([
   { path: "/", Component: MainPage },
   { path: "/movie/:movieId", Component: MoviePage },
]);

export default router;
