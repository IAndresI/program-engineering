import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Button } from "../../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../../ui/input";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ModeToggle } from "@/components/ModeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
const isAdmin = true;

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
    <header className="flex h-[56px] justify-between">
      <div className="flex items-center">
        <SidebarTrigger className="ml-4" />
      </div>
      <div className="flex items-center gap-5">
        {isAdmin && (
          <Button variant="secondary" asChild>
            <Link to="/admin">Admin Panel</Link>
          </Button>
        )}
        <Drawer
          direction="top"
          open={isOpen}
          onOpenChange={(isOpen) => setIsOpen(isOpen)}
        >
          <DrawerTrigger asChild>
            <Button className="flex items-center gap-2 px-5" variant="default">
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
        <ModeToggle />
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
