import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

interface IProps {
   genres: string[];
   clickOnGenre: (value: string[]) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
};

const names = [
   "Комедия",
   "Драма",
   "Триллер",
   "Боевик",
   "Ужасы",
   "Детектив",
   "Криминал",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
   return {
      fontWeight:
         personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
   };
}

const FilterGenreComponent: React.FC<IProps> = ({ genres, clickOnGenre }) => {
   const theme = useTheme();
   const handleChange = (event: SelectChangeEvent<typeof genres>) => {
      const {
         target: { value },
      } = event;
      clickOnGenre(typeof value === "string" ? [value] : value);
   };

   return (
      <div>
         <FormControl sx={{ m: 1, width: 350 }}>
            <InputLabel id="demo-multiple-chip-label">Жанр</InputLabel>
            <Select
               labelId="demo-multiple-chip-label"
               id="demo-multiple-chip"
               multiple
               value={genres}
               onChange={handleChange}
               input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
               renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                     {selected.map((value) => (
                        <Chip key={value} label={value} />
                     ))}
                  </Box>
               )}
               MenuProps={MenuProps}
            >
               {names.map((name) => (
                  <MenuItem
                     key={name}
                     value={name}
                     style={getStyles(name, genres, theme)}
                  >
                     {name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   );
};

export default FilterGenreComponent;
