import { ReactNode } from "react";

export type AppContextType = {
  toggleDarkTheme: () => void;
  isDarkTheme: boolean;
};

export type AppProviderProps = {
  children: ReactNode;
};
