import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Sidebar } from "./components/Sidebar";
import { SvgLogo } from "./components/svg/SvgLogo";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Film } from "./components/pages/Film";
import { AnimatePresence } from "framer-motion";

function App() {
  const { user } = useUser();
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];
  console.log(user?.primaryEmailAddress?.emailAddress);

  return (
    <div className="hidden h-[100svh] flex-col md:flex">
      <header className="grid justify-between grid-cols-2">
        <Link to="/" className="px-5 py-3 text-white">
          <SvgLogo className="w-10 h-10" />
        </Link>
        <div>
          <SignedIn>
            <div className="flex items-center h-full gap-3 px-5 ml-auto border-l w-fit">
              <UserButton />
              <div>{`${user?.firstName} ${user?.lastName}`}</div>
            </div>
          </SignedIn>
        </div>
      </header>

      <main className="grid flex-1 border-t bg-background lg:grid-cols-5">
        <Sidebar className="hidden border-r lg:block" />
        <AnimatePresence mode="wait">
          <Routes location={location} key={locationArr[1]}>
            <Route element={<Home />} path="/" />
            <Route element={<Film />} path="/film/:id" />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
