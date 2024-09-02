import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from "react-icons/fa";
import { Sublink } from "./types";

export const sublinks: Sublink[] = [
  {
    pageId: crypto.randomUUID(),
    page: "product",
    links: [
      {
        id: crypto.randomUUID(),
        label: "community",
        icon: <Fa500Px />,
        url: "/product/community",
      },
      {
        id: crypto.randomUUID(),
        label: "content",
        icon: <FaAccusoft />,
        url: "/product/content",
      },
      {
        id: crypto.randomUUID(),
        label: "roles",
        icon: <FaAdversal />,
        url: "/product/roles",
      },
    ],
  },
  {
    pageId: crypto.randomUUID(),
    page: "solutions",
    links: [
      {
        id: crypto.randomUUID(),
        label: "developers",
        icon: <FaAvianex />,
        url: "/solutions/developers",
      },
      {
        id: crypto.randomUUID(),
        label: "content managers",
        icon: <FaBitcoin />,
        url: "/solutions/content-managers",
      },
      {
        id: crypto.randomUUID(),
        label: "business teams",
        icon: <FaBtc />,
        url: "/solutions/business-teams",
      },
      {
        id: crypto.randomUUID(),
        label: "ecommerce",
        icon: <FaCodiepie />,
        url: "/solutions/ecommerce",
      },
    ],
  },
  {
    pageId: crypto.randomUUID(),
    page: "resources",
    links: [
      {
        id: crypto.randomUUID(),
        label: "starters",
        icon: <FaDocker />,
        url: "/resources/starters",
      },
      {
        id: crypto.randomUUID(),
        label: "showcase",
        icon: <FaGithubSquare />,
        url: "/resources/showcase",
      },
    ],
  },
];
