import {
   Box,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { SortEnumType } from "../../types/sortType";

interface IProps {
   sortType: SortEnumType;
   setSortType: (value: SortEnumType) => void;
}

const SortComponent: React.FC<IProps> = ({ sortType, setSortType }) => {
   /*    const [sortType, setSortType] = React.useState<SortEnumType>(
      SortEnumType.RatingDesc
   ); */

   const handleChange = (event: SelectChangeEvent) => {
      setSortType(event.target.value as SortEnumType);
   };

   return (
      <Box sx={{ minWidth: 200, m: 1 }}>
         <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={sortType}
               label="Age"
               onChange={handleChange}
            >
               <MenuItem value={SortEnumType.RatingDesc}>
                  {SortEnumType.RatingDesc}
               </MenuItem>
               <MenuItem value={SortEnumType.RatingAsc}>
                  {SortEnumType.RatingAsc}
               </MenuItem>
               <MenuItem value={SortEnumType.AlphabetAsc}>
                  {SortEnumType.AlphabetAsc}
               </MenuItem>
               <MenuItem value={SortEnumType.AlphabetDesc}>
                  {SortEnumType.AlphabetDesc}
               </MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
};

export default SortComponent;
