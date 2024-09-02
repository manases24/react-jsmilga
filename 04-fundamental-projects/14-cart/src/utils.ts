import { CartItemType } from "./api/types";

export const getTotals = (cart: Map<string, CartItemType>) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (const item of cart.values()) {
    totalAmount += item.amount;
    totalCost += item.price * item.amount;
  }

  return { totalAmount, totalCost };
};
