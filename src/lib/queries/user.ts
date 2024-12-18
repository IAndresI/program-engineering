import { IUser } from "@/types/IUser";
import { $axios } from "./axios";
import { IFilm } from "@/types/IFilm";

export const authUser = (user: Omit<IUser, "created_at">) =>
  $axios.post<IFilm[]>(`/auth/`, user).then((data) => {
    return data.data;
  });

export const getUserFavorites = (userId: string) =>
  $axios.get<IFilm[]>(`/favorite/${userId}/list/`).then((data) => {
    return data.data;
  });

export const addUserFavorites = ({
  userId,
  filmId,
}: {
  userId: string;
  filmId: number;
}) =>
  $axios
    .post<IFilm>(`/favorite/${userId}/add/`, {
      movie_id: filmId,
      user_id: userId,
    })
    .then((data) => {
      return data.data;
    });

export const removeUserFavorites = ({
  userId,
  filmId,
}: {
  userId: string;
  filmId: number;
}) =>
  $axios
    .post<IFilm>(`/favorite/${userId}/remove/`, { movie_id: filmId })
    .then((data) => {
      return data.data;
    });
