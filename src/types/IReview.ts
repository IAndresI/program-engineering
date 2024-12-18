import { IFilm } from "./IFilm";
import { IUser } from "./IUser";

export interface IReview {
  id: number;
  user: IUser;
  movie: IFilm;
  rating: number;
  text: string;
}

export interface IAllReviews {
  id: number;
  user: string;
  movie: number;
  rating: number;
  text: string;
}
