import { Router } from "express";
import { getProducts, createProduct } from "../controllers/productController";

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);

export default router;
