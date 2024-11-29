import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AdminFilms } from "../sections/admin/AdminFilms";

export const AdminPage = () => {
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={locationArr[1]}>
        <Route element={<div>Admin</div>} path="/" />
        <Route element={<AdminFilms />} path="/films" />
      </Routes>
    </AnimatePresence>
  );
};
