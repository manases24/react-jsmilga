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

// Hook para obtener tareas
export const useFetchTasks = () => {
  // `useQuery` se usa para obtener datos. Requiere una clave de consulta y una función de consulta.
  const { isLoading, data, isError } = useQuery<Task[]>({
    queryKey: ["tasks"], // Clave única para la consulta. Ayuda a React Query a identificar la consulta en la caché.
    queryFn: fetchTasks, // Función que obtiene los datos.
  });

  // Devuelve los estados de la consulta para ser usados en el componente.
  return { isLoading, isError, data };
};

// Hook para crear una tarea
export const useCreateTask = () => {
  const queryClient = useQueryClient(); // Obtiene el cliente de consulta para invalidar cachés.

  const mutation = useMutation<Task, Error, CreateTaskVariables>({
    mutationFn: ({ taskTitle }: CreateTaskVariables) => createTask(taskTitle), // Función que realiza la mutación (creación de tarea).
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Invalida la caché para las tareas, provocando una nueva obtención de datos.
      toast.success("Task added"); // Muestra un mensaje de éxito.
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error adding task"); // Muestra un mensaje de error si ocurre uno.
    },
  });

  // Devuelve la función de mutación y estados relacionados.
  return {
    createTask: mutation.mutate, // Función para ejecutar la mutación.
    isLoading: mutation.status === "pending", // Estado de carga.
    isError: mutation.status === "error", // Estado de error.
    error: mutation.error, // Objeto de error si ocurrió uno.
  };
};

// Hook para editar una tarea
export const useEditTask = () => {
  const queryClient = useQueryClient(); // Obtiene el cliente de consulta para invalidar cachés.

  return useMutation({
    mutationFn: ({ taskId, isDone }: EditTaskVariables) =>
      editTask(taskId, isDone), // Función que realiza la mutación (edición de tarea).
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Invalida la caché para las tareas.
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error editing task"); // Muestra un mensaje de error si ocurre uno.
    },
  });
};

// Hook para eliminar una tarea
export const useDeleteTask = () => {
  const queryClient = useQueryClient(); // Obtiene el cliente de consulta para invalidar cachés.

  const mutation = useMutation({
    mutationFn: ({ taskId }: DeleteTaskVariables) => deleteTaskApi(taskId), // Función que realiza la mutación (eliminación de tarea).
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Invalida la caché para las tareas.
      toast.success("Task deleted"); // Muestra un mensaje de éxito.
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error deleting task"); // Muestra un mensaje de error si ocurre uno.
    },
  });

  // Devuelve la función de mutación y estados relacionados.
  return {
    deleteTask: mutation.mutate, // Función para ejecutar la mutación.
    isLoading: mutation.status === "pending", // Estado de carga.
    isError: mutation.isError, // Estado de error.
    error: mutation.error, // Objeto de error si ocurrió uno.
  };
};
