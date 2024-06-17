import { Grid } from "@mui/material";
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
      <Grid container spacing={2}>
         {movies.map((movie, idx) => (
            <Grid item sm={6} lg={3} xl={2}>
               <MovieItem {...movie} key={idx} />
            </Grid>
         ))}
      </Grid>
   );
};

export default MovieList;
