import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useNavigate } from "react-router";
import { SiteHeader } from "./site-header";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") navigate("/dashboard/default");
  }, [navigate, location.pathname]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
