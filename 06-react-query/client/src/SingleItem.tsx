import { useState } from "react";
import { SingleItemProps } from "./types";

export const SingleItem = ({
  id,
  title,
  isDone,
  removeItem,
  editItem,
}: SingleItemProps) => {
  const [isChecked, setIsChecked] = useState(isDone);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    editItem(id);
  };

  return (
    <div className="single-item">
      <input type="checkbox" checked={isDone} onChange={handleCheckboxChange} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isDone ? "line-through" : "none",
        }}
      >
        {title}
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
