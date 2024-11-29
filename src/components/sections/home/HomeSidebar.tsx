import { Link, NavLink } from "react-router-dom";
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

export function HomeSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader className={!open ? "px-0" : "px-4"}>
          <Link to="/" className={!open ? "pl-1 pr-0" : ""}>
            <SvgLogo className="w-10 h-10" />
          </Link>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Library
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {" "}
              {library.map((lib) => (
                <SidebarMenuItem key={lib.label}>
                  <SidebarMenuButton asChild>
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
          <SidebarGroupLabel className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Films
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {genres.map((genre) => (
                <SidebarMenuItem key={genre.label}>
                  <SidebarMenuButton asChild>
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
      {/* <SidebarFooter /> */}
    </Sidebar>
  );
}

// export function HomeSidebar({
//   className,
// }: React.HTMLAttributes<HTMLDivElement>) {
//   return (
//     <aside className={cn("pb-12", className)}>
//       <div className="py-4 space-y-4">
//         <div className="px-3 py-2">
//           <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
//             Films
//           </h2>
//           <div className="space-y-1">
//             {genres.map((genre) => (
//               <NavLink
//                 key={genre.label}
//                 to={genre.link}
//                 className={({ isActive }) =>
//                   `inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${isActive ? "bg-accent text-accent-foreground" : ""}`
//                 }
//               >
//                 {genre.icon}
//                 {genre.label}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//         <div className="px-3 py-2">
//           <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
//             Library
//           </h2>
//           <div className="space-y-1">
//             {library.map((lib) => (
//               <NavLink
//                 key={lib.label}
//                 to={lib.link}
//                 className={({ isActive }) =>
//                   `inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${isActive ? "bg-accent text-accent-foreground" : ""}`
//                 }
//               >
//                 {lib.icon}
//                 {lib.label}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }
