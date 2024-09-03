export type ItemType = { id: string; title: string; isDone: boolean };

export type AddItemType = {
  addItem: (itemName: string) => void;
};

export type ItemProps = {
  items: ItemType[];
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};

export type SingleItemProps = ItemType & {
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};
