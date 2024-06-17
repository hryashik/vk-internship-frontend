import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styles from "./MovieItem.module.css";

import { MovieType } from "../types/movieType";

interface IProps extends MovieType {}

const MovieItem: React.FC<IProps> = ({ rating, title, year, image }) => {
   const calcColor = (rating: number) => {
      if (rating <= 5) return "red";
      else if (rating > 5 && rating < 7.5) return "yellow";
      else return "white";
   };
   return (
      <Card className={styles.card}>
         <CardActionArea>
            <CardMedia
               component="img"
               style={{ objectFit: "fill" }}
               image={
                  image ||
                  "https://facts.net/wp-content/uploads/2023/10/20-astonishing-facts-about-star-wars-poster-1697281777.jpg"
               }
               alt="film..."
            />
            <Typography
               className={styles.rating}
               variant="h6"
               color={calcColor(rating)}
               fontSize={14}
            >
               {rating.toFixed(1)}
            </Typography>
            <CardContent>
               <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
               >
                  <Typography variant="h5" component="div">
                     {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {year}
                  </Typography>
               </Box>
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default MovieItem;
