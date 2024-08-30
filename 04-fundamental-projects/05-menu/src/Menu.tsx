import { APIMenu } from "./api/types";
import { MenuItem } from "./MenuItem";

interface MenuProps {
  items: APIMenu[];
}

export const Menu = ({ items }: MenuProps) => {
  return (
    <div className="section-center">
      {items.map((menuItems: APIMenu) => {
        return <MenuItem {...menuItems} />;
      })}
    </div>
  );
};
