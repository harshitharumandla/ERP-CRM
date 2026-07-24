import { Router } from "express";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customerController";

const router = Router();

// Get all customers
router.get("/", getCustomers);

// Create customer
router.post("/", createCustomer);

// Update customer
router.put("/:id", updateCustomer);

// Delete customer
router.delete("/:id", deleteCustomer);

export default router;