import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { SvgLogo } from "./svg/SvgLogo";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const Header = () => {
  const { user } = useUser();

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const URLSearchText = searchParams.get("query");
    if (URLSearchText) {
      setSearchText(URLSearchText);
    } else {
      setSearchText("");
    }
  }, [location.search]);

  return (
    <header className="flex justify-between">
      <Link to="/" className="px-5 py-2 text-white">
        <SvgLogo className="w-10 h-10" />
      </Link>
      <div className="flex items-center gap-5">
        <Drawer
          direction="top"
          open={isOpen}
          onOpenChange={(isOpen) => setIsOpen(isOpen)}
        >
          <DrawerTrigger asChild>
            <Button className="flex items-center gap-2 px-8" variant="default">
              <MagnifyingGlassIcon className="w-5 h-5" />
              Search
            </Button>
          </DrawerTrigger>
          <DrawerContent className="rounded-none">
            <div className="w-full max-w-sm py-5 mx-auto">
              <DrawerHeader>
                <DrawerTitle className="text-3xl text-center">
                  Search
                </DrawerTitle>
              </DrawerHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate(`/search?query=${searchText}`);
                  setIsOpen(false);
                  if (!searchParams.get("query")) {
                    setSearchText("");
                  }
                }}
                className="mx-auto flex w-full max-w-[500px] items-center gap-3 pb-4"
              >
                <Input
                  type="search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  autoFocus
                />
                <Button
                  type="submit"
                  className="flex items-center gap-2 px-2"
                  variant="default"
                >
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </Button>
              </form>
            </div>
          </DrawerContent>
        </Drawer>
        <SignedIn>
          <div className="flex items-center h-full gap-3 px-5 ml-auto border-l w-fit">
            <UserButton />
            <div>{`${user?.firstName} ${user?.lastName}`}</div>
          </div>
        </SignedIn>
      </div>
    </header>
  );
};
