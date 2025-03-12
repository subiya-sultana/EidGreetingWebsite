import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.models.UserInfo || mongoose.model("UserInfo", UserInfoSchema);
