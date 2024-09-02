export type ItemType = { id: string; name: string; completed: boolean };

export type AddItemType = {
  addItem: (itemName: string) => void;
};
