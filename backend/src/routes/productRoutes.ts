import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/productController";

const router = Router();

// Get all products
router.get("/", getProducts);

// Create product
router.post("/", createProduct);

// Get single product
router.get("/:id", getProductById);

// Update product
router.put("/:id", updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

export default router;