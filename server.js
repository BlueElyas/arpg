import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv({
  path: [".env.local", ".env"],
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
