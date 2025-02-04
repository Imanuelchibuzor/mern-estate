import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { uploadSingleImage } from "../../utils/uploadImage.js";

export default function Profile() {
  const fileRef = useRef(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [profileImage, setProfileImage] = useState(currentUser?.avatar);
  const [file, setFile] = useState(undefined);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileUpload = async (file) => {
    const validExtensions = ["image/jpg", "image/jpeg", "image/png"];

    if (file.size > 2 * 1024 * 1024) {
      setUploadStatus("Error (Image must be less than 2MB)");
      return;
    }

    if (!validExtensions.includes(file.type)) {
      setUploadStatus("Error (Invalid file type)");
      return;
    }

    try {
      setUploadStatus("Uploading image...");
      const res = await uploadSingleImage(file);

      if (res.error) {
        setUploadStatus("Error uploading image: " + res.error);
      } else {
        console.log("Uploaded image URL:", res.imageUrl);

        setProfileImage(res.imageUrl);

        setUploadStatus("Image uploaded successfully!");
      }
    } catch (error) {
      console.error("Error in handleFileUpload:", error);
      setUploadStatus("Error: " + error.message);
    }

    // Reset uploadStatus after 3 seconds
    setTimeout(() => {
      setUploadStatus("");
    }, 5000);
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          src={profileImage}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          onClick={() => fileRef.current.click()}
        />
        {/* Successful ? File Upload Successful : Error Uploading File */}
        <p className="text-sm self-center">{uploadStatus}</p>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
