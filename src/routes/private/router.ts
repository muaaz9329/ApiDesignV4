import { Router } from "express";
import ProductRoutes from "./product/product.routes";
import UpdateRoutes from "./update/update.routes";
import UpdatePointRoutes from "./update-point/update-point.routes";
const router = Router();

/**
 * Product
 */
router.use(ProductRoutes);

/**
 * Update
 */

router.use(UpdateRoutes);

/**
 * UpdatePoint
 */

router.use(UpdatePointRoutes);

export default router;
