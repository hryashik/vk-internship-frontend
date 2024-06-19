import { Skeleton } from "@mui/material";

const MoviePageSkeleton = () => {
   return (
      <>
         <Skeleton height={600} width={350} sx={{ ml: 4 }} />
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
            }}
         >
            <Skeleton height={60} width={700} />
         </div>
      </>
   );
};

export default MoviePageSkeleton;
