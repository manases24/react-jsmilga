import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, editTask, deleteTask, fetchTasks } from "./api";
import { toast } from "react-toastify";
import {
  CreateTaskVariables,
  EditTaskVariables,
  DeleteTaskVariables,
  Task,
} from "./types";

export const useFetchTasks = () => {
  const { isLoading, data, isError } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  return { isLoading, isError, data };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, CreateTaskVariables>({
    mutationFn: ({ taskTitle }) => createTask(taskTitle),
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
      toast.success("Task added");
    },
    onError: (error) => {
      toast.error(error.message || "Error adding task");
    },
  });
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, EditTaskVariables>({
    mutationFn: ({ taskId, isDone }) => editTask(taskId, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
    onError: (error) => {
      toast.error(error.message || "Error editing task");
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteTaskVariables>({
    mutationFn: ({ taskId }) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
      toast.success("Task deleted");
    },
    onError: (error) => {
      toast.error(error.message || "Error deleting task");
    },
  });
};
