import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema({
  username: { type: [String], required: true },  // Changed to an array
  email: { type: String, required: true, unique: true },
});

export default mongoose.models.UserInfo || mongoose.model("UserInfo", UserInfoSchema);
