// Function to upload a single image
export const uploadSingleImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file); // Field name must match the backend ("image")

  try {
    const response = await fetch("/api/upload/upload-single", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Single image upload failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error uploading single image:", error);
    return { error: error.message };
  }
};

// Function to upload multiple images
export const uploadMultipleImages = async (files) => {
  const formData = new FormData();
  // Append each file. The field name "images" must match the backend.
  Array.from(files).forEach((file) => {
    formData.append("images", file);
  });

  try {
    const response = await fetch("/api/upload/upload-multiple", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Multiple image upload failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error uploading multiple images:", error);
    return { error: error.message };
  }
};


