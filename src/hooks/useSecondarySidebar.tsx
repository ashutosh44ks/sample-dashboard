import { useContext } from "react";
import { SecondarySidebarContext, type SecondarySidebarContextType } from "@/lib/secondary-sidebar-context";

export const useSecondarySidebar = (): SecondarySidebarContextType => {
  const context = useContext(SecondarySidebarContext);
  if (context === undefined) {
    throw new Error("useSecondarySidebar must be used within a SecondarySidebarProvider");
  }
  return context;
};
