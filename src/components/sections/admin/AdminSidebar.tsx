import { cn } from "@/utils/helpers";
import { NavLink } from "react-router-dom";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { SvgFire } from "../../svg/SvgFire";
import { SvgActor } from "../../svg/SvgActor";
import { SvgReview } from "../../svg/SvgReview";

const films = [
  {
    label: "Films",
    link: "films",
    icon: <SvgFire className="w-4 h-4 mr-2" />,
  },
  {
    label: "Users",
    link: "favorites",
    icon: <BookmarkIcon className="w-4 h-4 mr-2" />,
  },
  {
    label: "Actors",
    link: "actors",
    icon: <SvgActor className="w-4 h-4 mr-2" />,
  },
  {
    label: "Reviews",
    link: "reviews",
    icon: <SvgReview className="w-4 h-4 mr-2" />,
  },
];

export function AdminSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className={cn("pb-12", className)}>
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
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
