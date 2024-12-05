import { ClerkLoaded, ClerkLoading, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SvgLogo } from "@/components/ui/svg/SvgLogo";

export const AuthLayout = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      return navigate("/authentication");
    }
  }, [isSignedIn, isLoaded]);

  return (
    <AnimatePresence mode="wait">
      <ClerkLoading>
        <motion.div
          className="fixed inset-0 z-10 flex items-center justify-center bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SvgLogo className="animate-pulse" />
        </motion.div>
      </ClerkLoading>
      <ClerkLoaded>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Outlet key={locationArr[1] === "admin" ? 1 : 2} />
        </motion.div>
      </ClerkLoaded>
    </AnimatePresence>
  );
};
