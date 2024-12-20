import { Outlet } from "react-router-dom";
import { Header } from "@/components/sections/home/Header";
import { HomeSidebar } from "../sections/home/HomeSidebar";
import { motion } from "framer-motion";
import { SidebarProvider } from "../ui/sidebar";

export const HomeLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      key={"home_layout"}
    >
      <SidebarProvider>
        <HomeSidebar />
        <div className="h-[100svh] w-full overflow-auto">
          <Header />
          <main className="grid flex-1 grid-cols-3 border-t bg-background lg:grid-cols-4">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </motion.div>
  );
};
