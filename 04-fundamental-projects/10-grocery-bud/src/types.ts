export type ItemType = { id: string; name: string; completed: boolean };

export type AddItemType = {
  addItem: (itemName: string) => void;
};

export type ItemProps = {
  items: ItemType[];
  removeItem: (itemId: string) => void;
};

export type SingleItemProps = ItemType & {
  removeItem: (itemId: string) => void;
};
