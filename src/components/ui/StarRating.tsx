import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface IProps {
   value: number;
}

const StarRating: React.FC<IProps> = ({ value }) => {
   return (
      <Rating
         onMouseEnter={undefined}
         max={10}
         name="customized-icons"
         value={value}
         precision={0.5}
         emptyIcon={<StarBorderIcon fontSize="inherit" />}
         icon={<StarIcon fontSize="inherit" />}
         readOnly={true}
      />
   );
};

export default StarRating;
