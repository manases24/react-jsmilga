import { useState } from "react";
import { SingleItemProps } from "./types";

export const SingleItem = ({
  id,
  name,
  completed,
  removeItem,
  toggleItemCompleted,
}: SingleItemProps) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleItemCompleted(id);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked ? "line-through" : "none",
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
