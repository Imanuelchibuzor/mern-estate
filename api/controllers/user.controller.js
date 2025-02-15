import bcrypt from "bcryptjs";

import { errorHandler } from "../utils/error.js";
import User from "../db/models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "User route works!" });
};

export const updateUser = async (req, res, next) => {
  const reqId = req.params.id;
  const profileId = req.user.userId;

  if (reqId !== profileId)
    return next(errorHandler(401, "You can only update your own account"));

  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json({ rest });
  } catch (error) {
    next(error);
  }
};
