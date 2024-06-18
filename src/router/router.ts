import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import NotFoundPage from "../pages/NoutFoundPage";

const router = createBrowserRouter([
   { path: "/", Component: MainPage },
   { path: "/movie/:movieId", Component: MoviePage },
   { path: "/404", Component: NotFoundPage },
   { path: "*", Component: NotFoundPage },
]);

export default router;
