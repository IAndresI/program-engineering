import { IActor } from "@/types/IActor";
import { IFilm } from "@/types/IFilm";
import { $axios } from "./axios";

export const search = (query: string, signal: AbortSignal) =>
  $axios
    .get<{
      movies: IFilm[];
      actors: IActor[];
    }>("/search/", { params: { query }, signal })
    .then((data) => {
      return data.data;
    });
