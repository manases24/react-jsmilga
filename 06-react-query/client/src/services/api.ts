import { axiosFetch } from "./httpAdapter";
import { TaskResponse, FetchTasksResponse, Task } from "./types";

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axiosFetch.get<FetchTasksResponse>("/");
  return response.taskList;
};

export const createTask = async (taskTitle: string): Promise<Task> => {
  try {
    const response = await axiosFetch.post<TaskResponse, { title: string }>(
      "/",
      {
        title: taskTitle,
      }
    );
    return response.taskList;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const editTask = async (
  taskId: string,
  isDone: boolean
): Promise<void> => {
  try {
    await axiosFetch.patch<void, { isDone: boolean }>(`/${taskId}`, {
      isDone,
    });
  } catch (error) {
    console.error("Error editing task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    await axiosFetch.delete<void>(`/${taskId}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
