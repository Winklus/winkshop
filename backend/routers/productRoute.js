import express from "express";
const router = express.Router();
import { 
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct,
  getTopProducts,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleWares/authMiddleWare.js";

// Route to get all products and create a product
router.route("/")
.get(getProducts) 
.post(protect, admin, createProduct);

router.route('/:id/reviews').post(protect, createProductReview);

router.get('/top', getTopProducts);

// Route to get, update, or delete a product by ID

router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin,  updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
