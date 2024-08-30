import { Logo } from "./Logo";
import { Search } from "./Search";

export const Navbar = () => {
 

  return (
    <nav className="nav-bar">
      <Logo/>
      <Search/>
      <p className="num-results">Found ... results</p>
    </nav>
  );
};
