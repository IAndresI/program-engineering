import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { SvgLogo } from "../../ui/svg/SvgLogo";
import { Button } from "../../ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export const AdminHeader = () => {
  const { user } = useUser();

  return (
    <header className="flex justify-between">
      <Link to="/admin" className="px-5 py-2">
        <SvgLogo className="h-10 w-10" />
      </Link>
      <div className="flex items-center gap-5">
        <Button variant="secondary" asChild>
          <Link to="/">Home</Link>
        </Button>
        <ModeToggle />
        <SignedIn>
          <div className="ml-auto flex h-full w-fit items-center gap-3 border-l px-5">
            <UserButton />
            <div>{`${user?.firstName} ${user?.lastName}`}</div>
          </div>
        </SignedIn>
      </div>
    </header>
  );
};
