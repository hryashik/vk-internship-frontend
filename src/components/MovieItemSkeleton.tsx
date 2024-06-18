import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media() {
   return (
      <Grid
         container
         wrap="wrap"
         alignItems={"center"}
         justifyContent={"center"}
      >
         {Array.from(new Array(30)).map((_, index) => (
            <Box
               key={index}
               sx={{ marginRight: 1, marginLeft: 1, my: 5 }}
               display="flex"
               flexDirection={"column"}
               alignItems={"center"}
            >
               <Skeleton variant="rectangular" width={250} height={300} />
               <Skeleton width="80%" height="50px" />
            </Box>
         ))}
      </Grid>
   );
}

const MovieListSkeleton = () => {
   return (
      <Box sx={{ overflow: "hidden" }}>
         <Media />
      </Box>
   );
};

export default MovieListSkeleton;
