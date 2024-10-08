import { Sidebar } from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Film } from "./components/pages/Film";
import { AnimatePresence } from "framer-motion";
import { FilmCategory } from "./components/pages/FilmCategory";
import { NewFilms } from "./components/pages/NewFilms";
import { UserFavorites } from "./components/pages/UserFavorites";
import { Actors } from "./components/pages/Actors";
import { Actor } from "./components/pages/Actor";
import { UserReviews } from "./components/pages/UserReviews";
import { Header } from "./components/Header";
import { Search } from "./components/pages/Search";

function App() {
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];

  return (
    <div className="hidden h-[100svh] flex-col md:flex">
      <Header />

      <main className="grid flex-1 border-t bg-background lg:grid-cols-5">
        <Sidebar className="hidden border-r lg:block" />
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
            <Route
              element={<FilmCategory />}
              path="/films/genres/:categoryId"
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
