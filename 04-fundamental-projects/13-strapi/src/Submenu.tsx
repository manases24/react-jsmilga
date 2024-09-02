import { useRef, MouseEvent } from "react";
import { sublinks } from "./api/api";
import { LinkItem } from "./api/types";
import { useGlobalContext } from "./context";

export const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef<HTMLDivElement | null>(null);

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const submenu = submenuContainer.current;
    if (submenu) {
      const { left, right, bottom } = submenu.getBoundingClientRect();
      const { clientX, clientY } = event;

      if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
        setPageId(null);
      }
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length && currentPage.links.length > 3
              ? "1fr 1fr"
              : "1fr",
        }}
      >
        {currentPage?.links?.map(({ id, url, label, icon }: LinkItem) => {
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
