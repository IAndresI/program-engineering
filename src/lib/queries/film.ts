import { IFilm } from "@/types/IFilm";
import { $axios } from "./axios";
import { IGenre } from "@/types/IGenre";

export const getGenres = () =>
  $axios.get<IGenre[]>("/genre/").then((data) => {
    return data.data;
  });

export const getFilms = (genre?: number) =>
  $axios.get<IFilm[]>(`/movie/`, { params: { genre } }).then((data) => {
    return data.data;
  });

export const getFilm = (id: number) =>
  $axios.get<IFilm>(`/movie/${id}/`).then((data) => {
    return data.data;
  });
