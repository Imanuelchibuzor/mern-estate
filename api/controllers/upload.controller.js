export const uploadSingleImage = (req, res) => {
  try {
    // After multer processes the file, Cloudinary returns details in req.file
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    // Cloudinary stores image details (including secure_url)
    const imageUrl = req.file.path; // The Cloudinary URL
    return res.status(201).json({
      message: "Image uploaded successfully!",
      imageUrl,
    });
  } catch (error) {
    console.error("Single upload error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const uploadMultipleImage = (req, res) => {
  try {
    // req.files is an array of image objects
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No images uploaded" });
    }

    const imageUrls = req.files.map((file) => file.path);
    return res.status(201).json({
      message: "Images uploaded successfully!",
      imageUrls,
    });
  } catch (error) {
    console.error("Multiple upload error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
