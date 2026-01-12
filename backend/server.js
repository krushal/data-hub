import express from "express";
import cors from "cors";
import { categories, datasets } from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/categories", (req, res) => {
  res.set("Cache-Control", "public, max-age=60");
  res.json(categories);
});

app.get("/api/categories/:id/datasets", (req, res) => {
  const filtered = datasets.filter(d => d.categoryId === req.params.id);
  res.json(filtered);
});

app.get("/api/datasets/:datasetId", (req, res) => {
  const dataset = datasets.find(d => d.id === req.params.datasetId);
  if (!dataset) return res.status(404).json({ error: "Not found" });
  res.json(dataset);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
