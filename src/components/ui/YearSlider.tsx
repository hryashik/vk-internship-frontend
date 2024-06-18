import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

interface IProps {
   value: number[];
   setValue: (value: number[]) => void;
}

function valuetext(value: number) {
   return `${value}`;
}

const YearSlider: React.FC<IProps> = ({ value, setValue }) => {
   const handleChange = (_: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
   };

   return (
      <Box
         sx={{
            width: 250,
            m: 1,
            padding: "0 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}
      >
         <Typography>Год выхода</Typography>
         <Slider
            color="primary"
            min={1990}
            max={2024}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
         />
      </Box>
   );
};

export default YearSlider;
