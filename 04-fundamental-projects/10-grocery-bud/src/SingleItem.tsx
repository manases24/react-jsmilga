import { useState } from "react";
import { SingleItemProps } from "./types";

export const SingleItem = ({
  id,
  name,
  completed,
  removeItem,
  editItem,
}: SingleItemProps) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    editItem(id);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
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
