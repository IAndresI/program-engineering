import { ClerkLoaded, ClerkLoading, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SvgLogo } from "../svg/SvgLogo";

export const Layout = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

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
          <Outlet />
        </motion.div>
      </ClerkLoaded>
    </AnimatePresence>
  );
};
