import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { sidebarData } from "@/lib/constants";
import { useFavoritesData } from "@/hooks/useFavoritesData";
import {
  IconHistory,
  IconNotification,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import GlobalInput from "./global-input";

type SidebarRoutes = typeof sidebarData.dashboards;
interface RouteItem {
  title: string;
  parentTitle?: string;
}
export function SiteHeader() {
  const location = useLocation();
  const [routeItem, setRouteItem] = useState<RouteItem | null>(null);
  useEffect(() => {
    function findRouteItem(
      data: SidebarRoutes,
      path: string
    ): RouteItem | null {
      for (const item of data) {
        if (item.url === path) {
          return { title: item.title, parentTitle: undefined };
        }
        if (item.items && item.items.length > 0) {
          const found = findRouteItem(item.items, path);
          if (found) {
            return { title: found.title, parentTitle: item.title };
          }
        }
      }
      return null;
    }

    const path = location.pathname;
    const foundItem =
      findRouteItem(sidebarData.dashboards, path) ||
      findRouteItem(sidebarData.pages, path);
    setRouteItem(foundItem);
  }, [location.pathname]);

  const { favorites, toggleFavorite } = useFavoritesData();
  const isFavorite = routeItem
    ? favorites.some((fav) => fav.url === location.pathname)
    : false;
  const handleToggleFavorite = () => {
    if (routeItem) {
      toggleFavorite({
        id: routeItem.title,
        url: location.pathname,
      });
    }
  };

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 py-2">
        <SidebarTrigger title="Toggle Primary Sidebar" />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleFavorite}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <IconStarFilled /> : <IconStar />}
        </Button>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                {routeItem?.parentTitle || "Dashboards"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{routeItem?.title || "Default"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <GlobalInput
            className="hidden md:flex"
            inputProps={{
              placeholder: "Search",
            }}
          />
          <ModeToggle />
          <Button
            variant="ghost"
            className="hidden lg:flex"
            size="sm"
            title="History"
          >
            <IconHistory />
          </Button>
          <Button
            variant="ghost"
            className="hidden lg:flex"
            size="sm"
            title="Notifications"
          >
            <IconNotification />
          </Button>
          <SidebarTrigger title="Toggle Secondary Sidebar" />
        </div>
      </div>
    </header>
  );
}
