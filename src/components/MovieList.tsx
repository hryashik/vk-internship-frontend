import { MovieType } from "../types/movieType";
import MovieItem from "./MovieItem";

interface IProps {
   movies: MovieType[];
}

const MovieList: React.FC<IProps> = ({ movies }) => {
   if (!movies.length) {
      return (
         <>
            <h1>Loading...</h1>
         </>
      );
   }
   return (
      <div>
         {movies.map((movie, idx) => (
            <MovieItem {...movie} key={idx} />
         ))}
      </div>
   );
};

export default MovieList;
