import { Router } from "express";

const router = Router();

router.get("/product", (req, res) => {
  res.json({ message: "product" });
  res.status(200);
});

router.get("/product/:id", (req, res) => {});

router.post("/product", (req, res) => {});

router.put("/product/:id", (req, res) => {});

router.delete("/product/:id", (req, res) => {});

export default router;
