import { IActor } from "./IActor";
import { IGenre } from "./IGenre";

export interface IFilm {
  id: number;
  name: string;
  description: string;
  image: string;
  genres: IGenre[];
  release_date: string;
  created_at: string;
  rating: number;
  actors: IActor[];
  trailer_link: string;
}
