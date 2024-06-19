import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styles from "./MovieItem.module.css";

import { MovieType } from "../../types/movieType";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps extends MovieType {}

const MovieItem: React.FC<IProps> = React.memo((movie) => {
   const navigate = useNavigate();
   const calcColor = (rating: number) => {
      if (rating <= 5) return "red";
      else if (rating > 5 && rating < 7.5) return "yellow";
      else return "white";
   };
   const handleClick = () => navigate(`/movie/${movie.id}`);

   return (
      <Card className={styles.card}>
         <CardActionArea onClick={handleClick}>
            <CardMedia
               component="img"
               image={movie.poster.previewUrl}
               alt="film..."
            />
            <Typography
               className={styles.rating}
               variant="h6"
               color={calcColor(movie.rating.kp)}
               fontSize={16}
            >
               {movie.rating.kp.toFixed(1)}
            </Typography>
            <CardContent>
               <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
               >
                  <Typography variant="h5" component="div" noWrap>
                     {movie.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {movie.year}
                  </Typography>
               </Box>
            </CardContent>
         </CardActionArea>
      </Card>
   );
});

export default MovieItem;
