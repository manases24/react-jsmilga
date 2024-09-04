import { ItemType } from "./types";
import { useDeleteTask, useEditTask } from "./services/hooks";

export const SingleItem = ({ id, title, isDone }: ItemType) => {
  const { mutate: editTask } = useEditTask();
  const { deleteTask, isLoading, isError, error } = useDeleteTask();

  if (isLoading) {
    // Mostrar estado de carga
  }
  
  if (isError) {
    // Manejar error
    console.error(error);
  }

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => editTask({ taskId: id, isDone: !isDone })}
      />
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
        disabled={isLoading}
        onClick={() => deleteTask({ taskId: id })}
      >
        delete
      </button>
    </div>
  );
};
