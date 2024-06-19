import { useEffect, useState, useMemo } from "react";
import { MovieType } from "../../types/movieType";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MoviePage.module.css";
import { Button, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StarRating from "../../components/ui/StarRating";
import apiClient from "../../api/movieApi";
import MoviePageSkeleton from "../../components/MoviePageSkeleton";

const MoviePage = () => {
   const { movieId } = useParams();
   const navigate = useNavigate();
   const [movieInfo, setMovieInfo] = useState<MovieType | undefined>(undefined);
   const [isFetching, setIsFetching] = useState<boolean>(false);

   const formatGenres = useMemo(() => {
      let str = "";
      if (movieInfo) {
         str = movieInfo.genres.map((el) => el.name).join(", ");
      }
      return str;
   }, [movieInfo]);

   const formatTime = useMemo(() => {
      let str = "";
      if (movieInfo) {
         const hours = Math.floor(movieInfo.movieLength / 60);
         const minutes = movieInfo.movieLength - hours * 60;
         str += hours;
         str += ":";
         str += minutes.toString().length > 1 ? minutes : "0" + minutes;
      }
      return str;
   }, [movieInfo]);

   useEffect(() => {
      if (!movieId || !Number(movieId)) {
         navigate("/404");
      } else {
         setIsFetching(true);
         apiClient
            .searchMovieById(+movieId)
            .then((data) => {
               setMovieInfo(data);
            })
            .finally(() => setIsFetching(false));
      }
   }, [movieId, navigate]);
   if (isFetching) {
      return (
         <div className={styles.container}>
            <div className={styles.container__inner}>
               <MoviePageSkeleton />
            </div>
         </div>
      );
   }
   if (!movieInfo) {
      return (
         <div className={styles.container}>
            <h1>Нет информации о фильме</h1>
         </div>
      );
   }
   return (
      <div>
         <div className={styles.container__inner}>
            <div className={styles.inner__poster}>
               <img src={movieInfo.poster.url} alt="img..." />
               <div className={styles.inner__rating}>
                  <p className={styles.rating__number}>
                     {movieInfo.rating.kp.toFixed(1)}
                  </p>
                  <StarRating value={movieInfo.rating.kp} />
                  <p className={styles.rating__votes}>
                     {movieInfo.votes.kp.toLocaleString("ru-RU")} оценок
                  </p>
               </div>
            </div>
            <div className={styles.inner__info}>
               <Typography variant="h4" fontWeight={700}>
                  {movieInfo.name} ({movieInfo.year})
               </Typography>
               <Typography color="grey">
                  {movieInfo.alternativeName || ""}
               </Typography>
               <Button
                  sx={{ mt: 2, mb: 2 }}
                  variant="outlined"
                  endIcon={<AddOutlinedIcon />}
               >
                  В избранное
               </Button>
               <Typography variant="h5" fontWeight={600} fontSize={18} mb={2}>
                  О фильме:
               </Typography>
               <div className={styles.about}>
                  <div className={styles.about__line}>
                     <div className={styles.about__column}>Год выпуска</div>
                     <div className={styles.about__column}>
                        {movieInfo.year}
                     </div>
                  </div>
                  <div className={styles.about__line}>
                     <div className={styles.about__column}>Страна</div>
                     <div className={styles.about__column}>
                        {movieInfo.countries[0].name}
                     </div>
                  </div>
                  <div className={styles.about__line}>
                     <div className={styles.about__column}>Жанры</div>
                     <div className={styles.about__column}>{formatGenres}</div>
                  </div>
                  <div className={styles.about__line}>
                     <div className={styles.about__column}>Время</div>
                     <div className={styles.about__column}>
                        {movieInfo.movieLength} мин. / {formatTime}
                     </div>
                  </div>
               </div>
               <Typography
                  variant="h5"
                  fontWeight={600}
                  fontSize={18}
                  mb={1}
                  mt={2}
               >
                  Описание:
               </Typography>
               <Typography>{movieInfo.description}</Typography>
            </div>
         </div>
      </div>
   );
};

export default MoviePage;
