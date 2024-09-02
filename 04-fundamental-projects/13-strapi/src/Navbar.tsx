import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLinks } from "./NavLinks";
import { useGlobalContext } from "./context";

export const Navbar: React.FC = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
