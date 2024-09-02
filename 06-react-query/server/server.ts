import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import morgan from "morgan";

const app = express();

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

let taskList: Task[] = [
  { id: nanoid(), title: "walk the dog", isDone: false },
  { id: nanoid(), title: "wash dishes", isDone: false },
  { id: nanoid(), title: "drink coffee", isDone: true },
  { id: nanoid(), title: "take a nap", isDone: false },
];

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello From Server...</h1>");
});

app.get("/api/tasks", (req: Request, res: Response) => {
  res.json({ taskList });
});

app.post("/api/tasks", (req: Request, res: Response) => {
  const { title }: { title?: string } = req.body;
  if (!title) {
    res.status(400).json({ msg: "please provide title" });
    return;
  }
  const newTask: Task = { id: nanoid(), title, isDone: false };
  taskList = [...taskList, newTask];
  res.json({ task: newTask });
});

app.patch("/api/tasks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { isDone }: { isDone?: boolean } = req.body;

  if (typeof isDone !== "boolean") {
    res.status(400).json({ msg: "please provide valid isDone value" });
    return;
  }

  taskList = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, isDone };
    }
    return task;
  });

  res.json({ msg: "task updated" });
});

app.delete("/api/tasks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  taskList = taskList.filter((task) => task.id !== id);

  res.json({ msg: "task removed" });
});

app.use((req: Request, res: Response) =>
  res.status(404).send("Route does not exist")
);

const port = process.env.PORT || 5000;

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
