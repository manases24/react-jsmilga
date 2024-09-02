import { SingleItem } from "./SingleItem";
import { ItemProps } from "./types";

export const Items = ({ items, removeItem }: ItemProps) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} removeItem={removeItem} />;
      })}
    </div>
  );
};
