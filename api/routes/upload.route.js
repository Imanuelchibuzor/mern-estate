// routes/upload.js
import express from "express";
import upload from "../config/multerConfig.js";
import {
  uploadSingleImage,
  uploadMultipleImage,
} from "../controllers/upload.controller.js";

const router = express.Router();

// SINGLE IMAGE UPLOAD
router.post("/upload-single", upload.single("image"), uploadSingleImage);

// MULTIPLE IMAGES UPLOAD
router.post("/upload-multiple", upload.array("images", 5), uploadMultipleImage);

export default router;
