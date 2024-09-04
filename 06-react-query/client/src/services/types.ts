export type CreateTaskVariables = {
  taskTitle: string;
};

export type EditTaskVariables = {
  taskId: string;
  isDone: boolean;
};

export type DeleteTaskVariables = {
  taskId: string;
};

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FetchTasksResponse = {
  taskList: Task[];
};

export type TaskResponse = {
  taskList: Task;
};
