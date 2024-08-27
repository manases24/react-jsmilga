import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export function Button({ onClick }: { onClick: () => void }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      Cambiar a {theme === "light" ? "dark" : "light"} theme
    </button>
  );
}
