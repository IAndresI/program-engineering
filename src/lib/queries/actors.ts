import { IActor, IActorWithMovies } from "@/types/IActor";
import { $axios } from "./axios";

export const getActors = () =>
  $axios.get<IActor[]>("/actor/").then((data) => {
    return data.data;
  });

export const getActor = (id: number) =>
  $axios.get<IActorWithMovies>(`/actor/${id}/`).then((data) => {
    return data.data;
  });
