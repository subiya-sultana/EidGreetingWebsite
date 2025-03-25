import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, 
  usernames: { type: [String], required: true }, // Allow multiple usernames per email
  visitCount: { type: Number, default: 1 }, // Track total visits user made on website
  createdAt: { type: Date, default: Date.now }, // Store when user first visited
  lastVisit: { type: Date, default: Date.now } // Track last visit time
});

export default mongoose.models.UserInfo || mongoose.model("UserInfo", UserInfoSchema);

/*

pagesVisited: { type: [String], default: [] }, // Store visited pages
memeLiked: { type: [String], default: [] }, //did user liked the meme or not
totalLikesGiven: { type: Number, default: 0 }, // Count of memes liked
atmUsed: { type: Boolean, default: false }, // Whether the user used the ATM feature

*/
