import { Typography } from "@mui/material";

interface IProps {
   value: number;
}

const NumberRating: React.FC<IProps> = ({ value }) => {
   return (
      <>
         <Typography>{value}</Typography>
      </>
   );
};

export default NumberRating;
