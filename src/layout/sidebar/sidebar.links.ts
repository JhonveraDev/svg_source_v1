import { HomeIcon, FavoritesIcon, ApiIcon, ShadcnIcon, ExtensionsIcon } from "./sidebarIcons";
import type { SidebarLink } from "./index";

export const sidebarLinks: SidebarLink[] = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/favorites", label: "Favorites", icon: FavoritesIcon },
  { to: "/docs/api", label: "API", icon: ApiIcon },
  { to: "/docs/shadcn-ui", label: "Shadcn/ui", icon: ShadcnIcon },
  { to: "/extensions", label: "Extensions", icon: ExtensionsIcon },
];