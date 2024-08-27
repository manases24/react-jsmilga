// reducer.ts
import { State, Action } from "./types";
import { INCREMENT, DECREMENT, RESET } from "./action";

export const initialState: State = { count: 0 };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      throw new Error("Unhandled action type");
  }
}
