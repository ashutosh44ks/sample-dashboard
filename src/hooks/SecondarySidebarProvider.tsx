import React, { useState } from "react";
import { SecondarySidebarContext } from "@/lib/secondary-sidebar-context";

export const SecondarySidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SecondarySidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      {children}
    </SecondarySidebarContext.Provider>
  );
};
