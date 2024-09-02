import { useState } from "react";
import { SingleItemProps } from "./types";

export const SingleItem = ({
  id,
  name,
  completed,
  removeItem,
}: SingleItemProps) => {
    const [isChecked, setIsChecked] = useState(completed)

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!completed)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};
