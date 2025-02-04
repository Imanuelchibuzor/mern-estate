// config/multerConfig.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder to store images
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    // Optionally, set a public_id or transformation options here.
  },
});

// Set up multer using CloudinaryStorage
const upload = multer({ storage });

export default upload;
