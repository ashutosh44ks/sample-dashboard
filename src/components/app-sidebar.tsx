"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { sidebarData } from "@/lib/constants";
import NavQuick from "./nav-quick";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="text-custom-text-primary">
      <SidebarHeader>
        <div className="flex gap-2 items-center p-2 group-data-[collapsible=icon]:px-0">
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={sidebarData.user.avatar} alt="user-icon" />
            <AvatarFallback className="rounded-full">BW</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-medium group-data-[collapsible=icon]:translate-x-[-9999px] group-data-[collapsible=icon]:opacity-0 transition-transform delay-100">
            {sidebarData.user.name}
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="group-data-[collapsible=icon]:h-0 group-data-[collapsible=icon]:overflow-hidden">
          <NavQuick />
        </div>
        <NavMain groupLabel="Dashboards" items={sidebarData.dashboards} />
        <NavMain groupLabel="Pages" items={sidebarData.pages} />
      </SidebarContent>
    </Sidebar>
  );
}
