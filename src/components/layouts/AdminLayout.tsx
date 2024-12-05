import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeader } from "../sections/admin/AdminHeader";
import { AdminSidebar } from "../sections/admin/AdminSidebar";
import { motion } from "framer-motion";
import { SidebarProvider } from "../ui/sidebar";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      key={"admin_layout"}
    >
      <SidebarProvider>
        <AdminSidebar />

        <div className="h-[100svh] w-full overflow-auto">
          <AdminHeader />

          <main className="grid flex-1 border-t bg-background lg:grid-cols-4">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </motion.div>
  );
};
