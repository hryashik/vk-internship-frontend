import { Grid } from "@mui/material";
import { MovieType } from "../types/movieType";
import MovieItem from "./MovieItem";
import styles from "./MovieList.module.css";

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
      <div className={styles.container}>
         <Grid container spacing={2} justifyContent={"center"}>
            {movies.map((movie, idx) => (
               <Grid item sm={6} lg={3} xl={2} key={idx}>
                  <MovieItem {...movie} />
               </Grid>
            ))}
         </Grid>
      </div>
   );
};

export default MovieList;
