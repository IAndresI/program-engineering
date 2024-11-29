import { cn } from "@/utils/helpers";
import { NavLink } from "react-router-dom";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { SvgFire } from "../../ui/svg/SvgFire";
import { SvgActor } from "../../ui/svg/SvgActor";
import { SvgReview } from "../../ui/svg/SvgReview";

const films = [
  {
    label: "Films",
    link: "films",
    icon: <SvgFire className="mr-2 h-4 w-4" />,
  },
  {
    label: "Users",
    link: "favorites",
    icon: <BookmarkIcon className="mr-2 h-4 w-4" />,
  },
  {
    label: "Actors",
    link: "actors",
    icon: <SvgActor className="mr-2 h-4 w-4" />,
  },
  {
    label: "Reviews",
    link: "reviews",
    icon: <SvgReview className="mr-2 h-4 w-4" />,
  },
];

export function AdminSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Data
          </h2>
          <div className="space-y-1">
            {films.map((genre) => (
              <NavLink
                key={genre.label}
                to={genre.link}
                className={({ isActive }) =>
                  `inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${isActive ? "bg-accent text-accent-foreground" : ""}`
                }
              >
                {genre.icon}
                {genre.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
