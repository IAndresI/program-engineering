import { cn } from "@/utils/helpers";
import { NavLink } from "react-router-dom";
import { SvgDrama } from "./svg/genras/SvgDrama";
import { SvgComedy } from "./svg/genras/SvgComedy";
import { SvgFamily } from "./svg/genras/SvgFamily";
import { SvgHorror } from "./svg/genras/SvgHorror";
import { SvgFantasy } from "./svg/genras/SvgFantasy";
import { SvgThriller } from "./svg/genras/SvgThriller";
import { SvgAction } from "./svg/genras/SvgAction";
import { SvgAdventure } from "./svg/genras/SvgAdventure";
import { BookmarkIcon, HomeIcon } from "@radix-ui/react-icons";
import { SvgFire } from "./svg/SvgFire";
import { SvgActor } from "./svg/SvgActor";
import { SvgReview } from "./svg/SvgReview";

const genres = [
  {
    label: "Home",
    link: "/",
    icon: <HomeIcon className="w-4 h-4 mr-2" />,
  },
  {
    label: "Comedy",
    link: "/films/genres/1",
    icon: <SvgComedy className="w-4 h-4 mr-2" />,
  },
  {
    label: "Family friendly",
    link: "/films/genres/2",
    icon: <SvgFamily className="w-4 h-4 mr-2" />,
  },
  {
    label: "Horror",
    link: "/films/genres/3",
    icon: <SvgHorror className="w-4 h-4 mr-2" />,
  },
  {
    label: "Fantasy",
    link: "/films/genres/4",
    icon: <SvgFantasy className="w-4 h-4 mr-2" />,
  },
  {
    label: "Thrillers",
    link: "/films/genres/5",
    icon: <SvgThriller className="w-4 h-4 mr-2" />,
  },
  {
    label: "Action",
    link: "/films/genres/6",
    icon: <SvgAction className="w-4 h-4 mr-2" />,
  },
  {
    label: "Melodramas",
    link: "/films/genres/7",
    icon: <SvgDrama className="w-4 h-4 mr-2" />,
  },
  {
    label: "Adventures",
    link: "/films/genres/8",
    icon: <SvgAdventure className="w-4 h-4 mr-2" />,
  },
];

const library = [
  {
    label: "New",
    link: "/films/new",
    icon: <SvgFire className="w-4 h-4 mr-2" />,
  },
  {
    label: "Favorites",
    link: "/favorites",
    icon: <BookmarkIcon className="w-4 h-4 mr-2" />,
  },
  {
    label: "Actors",
    link: "/actors",
    icon: <SvgActor className="w-4 h-4 mr-2" />,
  },
  {
    label: "Your reviews",
    link: "/reviews",
    icon: <SvgReview className="w-4 h-4 mr-2" />,
  },
];

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className={cn("pb-12", className)}>
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Films
          </h2>
          <div className="space-y-1">
            {genres.map((genre) => (
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
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            {library.map((lib) => (
              <NavLink
                key={lib.label}
                to={lib.link}
                className={({ isActive }) =>
                  `inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${isActive ? "bg-accent text-accent-foreground" : ""}`
                }
              >
                {lib.icon}
                {lib.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
