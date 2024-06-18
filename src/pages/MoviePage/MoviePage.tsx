import { useEffect, useState, useMemo } from "react";
import { MovieType } from "../../types/movieType";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MoviePage.module.css";
import { Button, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StarRating from "../../components/ui/StarRating";
import apiClient from "../../api/movieApi";

const movie: MovieType = {
   id: 326,
   name: "Побег из Шоушенка",
   alternativeName: "The Shawshank Redemption",
   enName: "",
   type: "movie",
   year: 1994,
   description:
      "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
   shortDescription:
      "Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга",
   movieLength: 142,
   isSeries: false,
   ticketsOnSale: false,
   totalSeriesLength: null,
   seriesLength: null,
   ratingMpaa: "r",
   ageRating: 18,
   top10: null,
   top250: 4,
   typeNumber: 1,
   status: null,
   names: [],
   externalId: {
      imdb: "tt0111161",
      tmdb: 278,
      kpHD: "49bf154f0dea2d53b169846a284469cd",
   },
   logo: {
      url: "https://avatars.mds.yandex.net/get-ott/1648503/2a000001705c8bf514c033f1019473a4caae/orig",
   },
   poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig",
      previewUrl:
         "https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/x1000",
   },
   backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000016b03d1f5365474a90d26998e2a9f/orig",
      previewUrl:
         "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000016b03d1f5365474a90d26998e2a9f/x1000",
   },
   rating: {
      kp: 9.109,
      imdb: 9.3,
      filmCritics: 8.2,
      russianFilmCritics: 0,
      await: null,
   },
   votes: {
      kp: 1025954,
      imdb: 2901429,
      filmCritics: 141,
      russianFilmCritics: 1,
      await: 2,
   },
   genres: [
      {
         name: "драма",
      },
   ],
   countries: [
      {
         name: "США",
      },
   ],
   releaseYears: [],
};

const MoviePage = () => {
   const { movieId } = useParams();
   const navigate = useNavigate();
   const [movieInfo, setMovieInfo] = useState<MovieType | undefined>(undefined);

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
         const hours = Math.round(movieInfo.movieLength / 60);
         const minutes = movieInfo.movieLength - hours * 60;
         str += hours;
         str += ":";
         str += minutes;
      }
      return str;
   }, [movieInfo]);

   useEffect(() => {
      if (!movieId || !Number(movieId)) {
         navigate("/404");
      } else {
         apiClient.searchMovieById(+movieId).then();
         setMovieInfo(movie);
      }
   }, [movieId, navigate]);
   if (!movieInfo) {
      return (
         <div>
            <h1>Ошибка</h1>
         </div>
      );
   }
   return (
      <div className={styles.container}>
         <div className={styles.container__inner}>
            <div className={styles.inner__poster}>
               <img src={movieInfo.poster.url} alt="img..." />
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
                  mb={2}
                  mt={2}
               >
                  Описание:
               </Typography>
               <Typography>{movieInfo.description}</Typography>
            </div>
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
      </div>
   );
};

export default MoviePage;
