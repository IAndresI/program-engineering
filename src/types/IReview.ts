import { IUser } from "./IUser";

export interface IReview {
  id: number;
  user: IUser;
  rating: number;
  text: string;
}
