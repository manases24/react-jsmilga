import { IconType } from "react-icons";

// Tipo para los ítems de link
export type LinkItemType = {
  id: string;
  label: string;
  icon: IconType;
  url: string;
};

// Tipo para cada sublink
export type SublinkType = {
  pageId: string;
  page: string;
  links: LinkItemType[];
};
