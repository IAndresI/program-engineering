import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AdminFilms } from "../sections/admin/AdminFilms";
import { AdminUsers } from "../sections/admin/AdminUsers";
import { AdminHome } from "../sections/admin/AdminHome";

export const AdminPage = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AdminHome />} path="/" />
        <Route element={<AdminFilms />} path="/films" />
        <Route element={<AdminUsers />} path="/users" />
      </Routes>
    </AnimatePresence>
  );
};
