import { createContext, useContext, useState } from "react";
import { NavLinks } from "./Navlinks";

// Define un tipo para el contexto
interface NavbarContextType {
  user: { name: string } | null;
  logout: () => void;
}

// Crea el contexto con el tipo especificado
export const NavbarContext = createContext<NavbarContextType | null>(null);
// export const useAppContext = () => useContext(NavbarContext);

export const useAppContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un NavbarContext.Provider');
  }
  return context;
};


export function Navbar() {
  const [user, setUser] = useState<{ name: string } | null>({ name: "bob" });
  
  const logout = () => {
    setUser(null);
  };

  // Proveer tanto el usuario como la función de logout en el contexto
  const value = { user, logout };

  return (
    <NavbarContext.Provider value={value}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}
