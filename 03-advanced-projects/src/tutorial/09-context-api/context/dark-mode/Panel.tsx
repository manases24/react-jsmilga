import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export function Panel() {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>Bienvenido</h1>
      <p>Este es el panel de {theme} theme</p>
    </section>
  );
}
