import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MovieType } from "../../types/movieType";
import { useEffect, useMemo, useState } from "react";
import apiClient from "../../api/movieApi";

const SearchComponent = () => {
   const [findMovies, setFindMovies] = useState<MovieType[]>([]);
   const [error, setError] = useState<boolean>(false);
   const [input, setInput] = useState("");

   useEffect(() => {
      if (!input) return;
      const handler = setTimeout(() => {
         apiClient
            .searchMoviesByName(input)
            .then((data) => setFindMovies(data.docs))
            .catch((e) => {
               console.error(e);
               setError(true);
            });
      }, 1000);
      return () => clearTimeout(handler);
   }, [input]);

   const displayedMovies = useMemo(() => {
      const unique = new Set();
      for (const item of findMovies) {
         if (unique.size <= 10) {
            unique.add(item.name);
         } else {
            break;
         }
      }
      return Array.from(unique);
   }, [findMovies]);
   if (error) {
      <>
         <TextField
            label="Поиск фильма"
            value={input}
            onChange={(e) => setInput(e.target.value)}
         />
      </>;
   }
   return (
      <Autocomplete
         sx={{ width: 400, mt: 2 }}
         id="free-solo-demo"
         options={displayedMovies}
         renderInput={(params) => (
            <TextField
               {...params}
               label="Поиск фильма"
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
         )}
      />
   );
};

export default SearchComponent;
