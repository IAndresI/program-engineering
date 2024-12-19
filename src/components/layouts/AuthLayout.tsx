import { ClerkLoaded, ClerkLoading, useUser } from "@clerk/clerk-react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SvgLogo } from "@/components/ui/svg/SvgLogo";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { authUser } from "@/lib/queries/user";

export const AuthLayout = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate } = useMutation({
    mutationFn: authUser,
  });

  const locationArr = location.pathname?.split("/") ?? [];

  useEffect(() => {
    if (isSignedIn && user) {
      console.log(user);

      mutate({
        name: user.fullName || "",
        avatar: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        id: user.id,
      });
    }
    if (!isSignedIn && isLoaded) {
      navigate("/authentication");
    }
  }, [isSignedIn, user]);

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
