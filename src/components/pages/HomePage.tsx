import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "@/components/sections/home/Home";
import { Film } from "@components/sections/home/Film";
import { AnimatePresence } from "framer-motion";
import { FilmCategory } from "@components/sections/home/FilmCategory";
import { NewFilms } from "@components/sections/home/NewFilms";
import { UserFavorites } from "@components/sections/home/UserFavorites";
import { Actors } from "@components/sections/home/Actors";
import { Actor } from "@components/sections/home/Actor";
import { UserReviews } from "@components/sections/home/UserReviews";
import { Search } from "@components/sections/home/Search";

export const HomePage = () => {
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={locationArr[1]}>
        <Route element={<Home />} path="/" />
        <Route element={<Film />} path="/film/:id" />
        <Route element={<NewFilms />} path="/films/new" />
        <Route element={<Actors />} path="/actors" />
        <Route element={<Actor />} path="/actors/:id" />
        <Route element={<UserFavorites />} path="/favorites" />{" "}
        <Route element={<UserReviews />} path="/reviews" />
        <Route element={<Search />} path="/search" />
        <Route element={<FilmCategory />} path="/films/genres/:categoryId" />
      </Routes>
    </AnimatePresence>
  );
};
