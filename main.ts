import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World!");
});

app.get("/docker", (req: Request, res: Response) => {
  return res.send("Hello from Docker!");
});

app.get("/todos", async (req: Request, res: Response) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return res.status(200).json({
    success: true,
    data: response.data,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App started on http://localhost:${PORT}`));
