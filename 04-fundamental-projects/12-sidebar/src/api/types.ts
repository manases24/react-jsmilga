import { ReactNode } from "react";

export type LinkType = {
  id: number;
  url: string;
  text: string;
  icon: ReactNode;
};

export type SocialType = {
  id: number;
  url: string;
  icon: ReactNode;
};

export type AppContextType = {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
};
