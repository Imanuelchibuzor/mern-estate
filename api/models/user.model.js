import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F12225%2F12225935.png&tbnid=8owetMrz_pfZXM&vet=10CAYQxiAoB2oXChMIwPXPpqGoiwMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile-picture_12225935&docid=q0pStds03Ir_QM&w=512&h=512&itg=1&q=profile%20image&ved=0CAYQxiAoB2oXChMIwPXPpqGoiwMVAAAAAB0AAAAAEAc",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
