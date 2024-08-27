import { createContext, useState } from "react";
import { Button } from "./Button";
import { Panel } from "./Panel";

// Definir el tipo para el contexto
type Theme = "light" | "dark";

// Crear el contexto con un valor predeterminado
export const ThemeContext = createContext<Theme>("light");

export default function ThemeProvider() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app-container">
        <Panel />
        <Button onClick={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}
