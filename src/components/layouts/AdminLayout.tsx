import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeader } from "../sections/admin/AdminHeader";
import { AdminSidebar } from "../sections/admin/AdminSidebar";
import { AnimatePresence, motion } from "framer-motion";

const isAdmin = true;

export const AdminLayout = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin && isLoaded) {
      return navigate("/");
    }
  }, [isSignedIn, isLoaded, isAdmin]);

  return (
    <AnimatePresence key="admin_layout" mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="grid min-h-[100svh] grid-rows-[auto_1fr]"
      >
        <AdminHeader />

        <main className="grid flex-1 h-full border-t bg-background lg:grid-cols-5">
          <AdminSidebar className="hidden border-r lg:block" />
          <Outlet />
        </main>
      </motion.div>
    </AnimatePresence>
  );
};
