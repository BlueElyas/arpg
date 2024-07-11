import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

// Load the appropriate .env file based on the environment
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env" });
} else {
  dotenv.config({ path: ".env.local" });
}

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
