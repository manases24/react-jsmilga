import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as uuid } from "uuid";
import morgan from "morgan";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

interface Options {
  port: number;
}

export class Server {
  private app = express();
  private readonly port: number;
  private taskList: Task[] = [
    { id: uuid(), title: "walk the dog", isDone: false },
    { id: uuid(), title: "wash dishes", isDone: false },
    { id: uuid(), title: "drink coffee", isDone: true },
    { id: uuid(), title: "take a nap", isDone: false },
  ];

  constructor(options: Options) {
    this.port = options.port;
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware() {
    if (process.env.NODE_ENV !== "production") {
      this.app.use(morgan("dev"));
    }

    this.app.use(cors());
    this.app.use(express.json());
  }

  private configureRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("<h1>Hello From Server...</h1>");
    });

    this.app.get("/api/tasks", (req: Request, res: Response) => {
      res.json({ taskList: this.taskList });
    });

    this.app.post("/api/tasks", (req: Request, res: Response) => {
      const { title }: { title?: string } = req.body;
      if (!title) {
        res.status(400).json({ msg: "please provide title" });
        return;
      }
      const newTask: Task = { id: uuid(), title, isDone: false };
      this.taskList = [...this.taskList, newTask];
      res.json({ task: newTask });
    });

    this.app.patch("/api/tasks/:id", (req: Request, res: Response) => {
      const { id } = req.params;
      const { isDone }: { isDone?: boolean } = req.body;

      if (typeof isDone !== "boolean") {
        res.status(400).json({ msg: "please provide valid isDone value" });
        return;
      }

      this.taskList = this.taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isDone };
        }
        return task;
      });

      res.json({ msg: "task updated" });
    });

    this.app.delete("/api/tasks/:id", (req: Request, res: Response) => {
      const { id } = req.params;
      this.taskList = this.taskList.filter((task) => task.id !== id);

      res.json({ msg: "task removed" });
    });

    this.app.use((req: Request, res: Response) =>
      res.status(404).send("Route does not exist")
    );
  }

  async start() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}...`);
    });
  }
}
