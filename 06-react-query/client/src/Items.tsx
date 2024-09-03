import { SingleItem } from "./SingleItem";
import { ItemProps } from "./types";

export const Items = ({ items, removeItem, editItem }: ItemProps) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          {...item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};
