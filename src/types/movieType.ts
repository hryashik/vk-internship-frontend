export type MovieType = {
   id: number;
   name: string | null;
   alternativeName: string | null;
   description: string;
   countries: { name: string }[];
   genres: { name: string }[];
   poster: {
      previewUrl: string;
      url: string;
   };
   year: number;
   rating: { kp: number; imdb: number; filmCritics: number };
   votes: { kp: number };
   movieLength: number;
};
