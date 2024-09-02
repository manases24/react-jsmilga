import React from "react";
import { useGlobalContext } from "./context";
import { sublinks } from "./api/api";
import { Sublink } from "./api/types";

export const NavLinks: React.FC = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page }: Sublink) => {
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
