import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTask,
  editTask,
  deleteTask as deleteTaskApi,
  fetchTasks,
} from "./api";
import { toast } from "react-toastify";
import {
  CreateTaskVariables,
  EditTaskVariables,
  DeleteTaskVariables,
  Task,
} from "./types";

// Fetch tasks hook
export const useFetchTasks = () => {
  const { isLoading, data, isError } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  return { isLoading, isError, data };
};

// Create task hook
export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Task, Error, CreateTaskVariables>({
    mutationFn: ({ taskTitle }: CreateTaskVariables) => createTask(taskTitle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error adding task");
    },
  });

  return {
    createTask: mutation.mutate,
    isLoading: mutation.status === "pending",
    isError: mutation.status === "error",
    error: mutation.error,
  };
};

// Edit task hook
export const useEditTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, isDone }: EditTaskVariables) =>
      editTask(taskId, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error editing task");
    },
  });
};

// Delete task hook
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ taskId }: DeleteTaskVariables) => deleteTaskApi(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task deleted");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error deleting task");
    },
  });

  return {
    deleteTask: mutation.mutate,
    isLoading: mutation.status === "pending",
    isError: mutation.isError,
    error: mutation.error,
  };
};
