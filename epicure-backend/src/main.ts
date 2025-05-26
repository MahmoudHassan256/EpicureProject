import express from "express";
import routes from "./routes/index";
import { connectDb } from "./db/index";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
  origin: ["https://your-frontend-domain.vercel.app", "http://localhost:3000"],
  credentials: true
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Default");
});

app.use("", routes);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
  }
);

const PORT = process.env.PORT || 3001;

connectDb()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Listening on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("Failed to connect to DB:", error);
  });
