import { Link, NavLink, useLocation } from "react-router-dom";
import { SvgDrama } from "../../ui/svg/genras/SvgDrama";
import { SvgComedy } from "../../ui/svg/genras/SvgComedy";
import { SvgFamily } from "../../ui/svg/genras/SvgFamily";
import { SvgHorror } from "../../ui/svg/genras/SvgHorror";
import { SvgFantasy } from "../../ui/svg/genras/SvgFantasy";
import { SvgThriller } from "../../ui/svg/genras/SvgThriller";
import { SvgAction } from "../../ui/svg/genras/SvgAction";
import { SvgAdventure } from "../../ui/svg/genras/SvgAdventure";
import { BookmarkIcon, HomeIcon } from "@radix-ui/react-icons";
import { SvgFire } from "../../ui/svg/SvgFire";
import { SvgActor } from "../../ui/svg/SvgActor";
import { SvgReview } from "../../ui/svg/SvgReview";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SvgLogo } from "@/components/ui/svg/SvgLogo";

const genres = [
  {
    label: "Home",
    link: "/",
    icon: <HomeIcon className="mr-2 h-4 w-4" />,
  },
  {
    label: "Comedy",
    link: "/films/genres/1",
    icon: <SvgComedy className="mr-2 h-4 w-4" />,
  },
  {
    label: "Family friendly",
    link: "/films/genres/2",
    icon: <SvgFamily className="mr-2 h-4 w-4" />,
  },
  {
    label: "Horror",
    link: "/films/genres/3",
    icon: <SvgHorror className="mr-2 h-4 w-4" />,
  },
  {
    label: "Fantasy",
    link: "/films/genres/4",
    icon: <SvgFantasy className="mr-2 h-4 w-4" />,
  },
  {
    label: "Thrillers",
    link: "/films/genres/5",
    icon: <SvgThriller className="mr-2 h-4 w-4" />,
  },
  {
    label: "Action",
    link: "/films/genres/6",
    icon: <SvgAction className="mr-2 h-4 w-4" />,
  },
  {
    label: "Melodramas",
    link: "/films/genres/7",
    icon: <SvgDrama className="mr-2 h-4 w-4" />,
  },
  {
    label: "Adventures",
    link: "/films/genres/8",
    icon: <SvgAdventure className="mr-2 h-4 w-4" />,
  },
];

const library = [
  {
    label: "New",
    link: "/films/new",
    icon: <SvgFire className="mr-2 h-4 w-4" />,
  },
  {
    label: "Favorites",
    link: "/favorites",
    icon: <BookmarkIcon className="mr-2 h-4 w-4" />,
  },
  {
    label: "Actors",
    link: "/actors",
    icon: <SvgActor className="mr-2 h-4 w-4" />,
  },
  {
    label: "Your reviews",
    link: "/reviews",
    icon: <SvgReview className="mr-2 h-4 w-4" />,
  },
];

export function HomeSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader className={!open ? "px-0" : "px-4"}>
          <Link to="/" className={!open ? "pl-1 pr-0" : ""}>
            <SvgLogo className="h-10 w-10" />
          </Link>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {" "}
              {library.map((lib) => (
                <SidebarMenuItem key={lib.label}>
                  <SidebarMenuButton
                    isActive={location.pathname === lib.link}
                    asChild
                  >
                    <NavLink
                      to={lib.link}
                      className={({ isActive }) =>
                        `inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${isActive ? "bg-accent text-accent-foreground" : ""}`
                      }
                    >
                      {lib.icon}
                      {lib.label}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Films
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {genres.map((genre) => (
                <SidebarMenuItem key={genre.label}>
                  <SidebarMenuButton
                    isActive={location.pathname === genre.link}
                    asChild
                  >
                    <NavLink
                      to={genre.link}
                      className={({ isActive }) =>
                        `inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${isActive ? "bg-accent text-accent-foreground" : ""}`
                      }
                    >
                      {genre.icon}
                      {genre.label}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
