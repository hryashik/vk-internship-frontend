import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import placeholderImg from "../assets/mock-card.png";

import { MovieType } from "../types/movieType";
import StarRating from "./ui/StarRating";

interface IProps extends MovieType {}

const MovieItem: React.FC<IProps> = ({ rating, title, year, image }) => {
   return (
      <Card sx={{ maxWidth: 300 }}>
         <CardActionArea>
            <CardMedia
               component="img"
               height="250"
               image={image || placeholderImg}
               alt="film..."
            />
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
               <StarRating value={rating} />
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default MovieItem;
