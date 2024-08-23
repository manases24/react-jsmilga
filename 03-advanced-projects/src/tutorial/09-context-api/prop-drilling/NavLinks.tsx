import { UserContainer } from "./UserContainer";
import { UserContainerProps } from "./types";

export function NavLinks({user, logout}: UserContainerProps) {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
}
