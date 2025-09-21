import { createContext } from "react";

export interface SecondarySidebarContextType {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const SecondarySidebarContext = createContext<SecondarySidebarContextType | undefined>(undefined);
