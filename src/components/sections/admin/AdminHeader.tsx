import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const AdminHeader = () => {
  const { user } = useUser();

  return (
    <header className="flex h-[56px] justify-between">
      <div className="flex items-center">
        <SidebarTrigger className="ml-4" />
      </div>
      <div className="flex items-center gap-5">
        <Button variant="secondary" asChild>
          <Link to="/">Home</Link>
        </Button>
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
