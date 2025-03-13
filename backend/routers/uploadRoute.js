import path from 'path';
import Product from "../models/productModel.js";
import fs from 'fs';
import express from 'express';
import multer from 'multer';

const router = express.Router();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Setup multer storage for image upload

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to store the image
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Endpoint to handle image upload
router.post('/', upload.single('image'), async (req, res) => {
  if (req.file) {
    const oldImagePath = req.body.oldImage;  // This should come from the frontend (old image path)
    
    // Delete the old image if it's not the default/sample image

    if (oldImagePath && oldImagePath !== '/images/sample.jpg') {
      const oldImageFullPath = path.join(__dirname, 'uploads', oldImagePath.replace('/upload/', ''));  // Remove '/upload' from path
      fs.unlink(oldImageFullPath, (err) => {
        if (err) {
          console.error('Error deleting old image:', err);
        } else {
          console.log('Old image deleted successfully');
        }
      });
    }

    // Update the product's image in the database

    const newImagePath = `/upload/${req.file.filename}`;  // The new image path

    // Assuming `Product` is your product model
    
    const updatedProduct = await Product.findByIdAndUpdate(
      req.body.productId,  // The product ID from the frontend (you should send this in the request)
      { image: newImagePath },
      { new: true }  // Return the updated product
    );

    res.status(200).json({
      message: 'Image uploaded and product updated successfully',
      image: newImagePath,
      updatedProduct,  // Return the updated product (including the new image URL)
    });
  } else {
    res.status(400).json({ message: 'Image upload failed' });
  }
});

export default router;

