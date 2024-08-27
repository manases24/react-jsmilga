// types.ts
import { INCREMENT, DECREMENT, RESET } from "./action";

export interface State {
  count: number;
}

export type Action =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof RESET };
