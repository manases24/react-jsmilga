import { ReactNode } from "react";

export type LinkType = {
  id: number;
  url: string;
  text: string;
};

export type SocialType = {
  id: number;
  url: string;
  icon: ReactNode;
};
