import { useState, useRef, RefObject } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./api/api";
import { LinkType, SocialType } from "./api/types";
import logo from "./logo.svg";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef: RefObject<HTMLDivElement> = useRef(null);
  const linksRef: RefObject<HTMLUListElement> = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current?.getBoundingClientRect().height}px` || "0px"
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }: LinkType) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social links */}
        <ul className="social-icons">
          {social.map(({ id, url, icon }: SocialType) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
