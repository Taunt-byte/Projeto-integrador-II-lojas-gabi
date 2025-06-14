import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/product.routes.js"
import cors from "cors"

dotenv.config()

const app = express();
const frontendUrl = process.env.FRONTEND_URL || 3000
const corsOptions = { origin: frontendUrl, optionsSuccessStatus: 200 }

app.use(cors(corsOptions))

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Teste");
});

app.use("/api",productRoutes)

export default app;