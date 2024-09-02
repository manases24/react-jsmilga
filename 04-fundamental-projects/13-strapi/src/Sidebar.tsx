import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { LinkItem, Sublink } from "./api/types";
import { sublinks } from "./api/api";

export const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ links, page, pageId }: Sublink) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link: LinkItem) => {
                    const { id, url, icon, label } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
