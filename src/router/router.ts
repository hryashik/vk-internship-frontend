import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import NotFoundPage from "../pages/NoutFoundPage";
import ApplicationBar from "../components/AppBar/ApplicationBar";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";

const router = createBrowserRouter([
   {
      path: "/",
      Component: ApplicationBar,
      children: [
         {
            path: "/",
            Component: MainPage,
         },
         { path: "/movie/:movieId", Component: MoviePage },
         { path: "/favorites", Component: FavoritesPage },
         { path: "/404", Component: NotFoundPage },
         { path: "*", Component: NotFoundPage },
      ],
   },
]);

export default router;
