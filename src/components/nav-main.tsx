import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type { TablerIcon } from "@tabler/icons-react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
  groupLabel,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | null | TablerIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  groupLabel: string;
}) {
  const location = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-custom-text-secondary">
        {groupLabel}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          // Check if the current item's URL matches the current location
          const isActive = location.pathname === item.url;
          if (item.items && item.items.length > 0) {
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={isActive}
                className={cn(
                  "group/collapsible",
                  isActive && "bg-custom-bg-highlight"
                )}
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }
          return (
            <Link to={item.url}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={isActive}
                className={cn(isActive && "bg-custom-bg-highlight")}
              >
                {item.icon && <item.icon />}
                {item.title}
              </SidebarMenuButton>
            </Link>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
