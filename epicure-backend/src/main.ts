import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db";
import routes from "./routes/index";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.options("*", cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello from backend");
});

connectDb();
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
