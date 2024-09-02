import { ReactNode } from "react";

// Tipo para los ítems de link
export type LinkItem = {
  id: string;
  label: string;
  icon: JSX.Element;
  url: string;
};

// Tipo para cada sublink
export type Sublink = {
  pageId: string;
  page: string;
  links: LinkItem[];
};

// Define los tipos para el contexto
export type AppContextType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  pageId: string | null;
  setPageId: (pageId: string | null) => void;
};

// Define los tipos para las props del proveedor de contexto
export type AppProviderProps = {
  children: ReactNode;
};
