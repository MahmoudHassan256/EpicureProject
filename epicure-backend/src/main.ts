import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Serve React static files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API routes here...
app.get("/api/hello", (req, res) => {
  res.send("Hello from backend");
});

// Fallback for React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
