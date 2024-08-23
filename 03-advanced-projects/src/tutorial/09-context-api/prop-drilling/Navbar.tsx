import { useState } from "react";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  const [user, setUser] = useState<{ name: string } | null>({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
}
