import { Router } from "express";
import { ProductController } from "../controller/product.controller.js";

const router = Router()

router.get("/products", ProductController.list)

export default router;