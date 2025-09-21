import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useNavigate } from "react-router";
import { SiteHeader } from "./site-header";
import { useEffect } from "react";
import { useLocation } from "react-router";
import SecondarySidebar from "./secondary-sidebar";
import { SecondarySidebarProvider } from "@/hooks/SecondarySidebarProvider";
import { useSecondarySidebar } from "@/hooks/useSecondarySidebar";
import { cn } from "@/lib/utils";

function LayoutContent({ children }: { children?: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen } = useSecondarySidebar();

  useEffect(() => {
    if (location.pathname === "/") navigate("/dashboard/default");
  }, [navigate, location.pathname]);

  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <SiteHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 text-custom-text-primary min-w-0 overflow-hidden">
            <Outlet />
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
      <div
        className={cn(
          "transition-all duration-200 ease-in-out border-l bg-background",
          isOpen ? "w-75 opacity-100" : "w-0 opacity-0 overflow-hidden"
        )}
      >
        {isOpen && <SecondarySidebar />}
      </div>
    </div>
  );
}

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SecondarySidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SecondarySidebarProvider>
  );
}
