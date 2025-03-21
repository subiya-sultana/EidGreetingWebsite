import mongoose from "mongoose";

const MY_MONGODB_URI = process.env.MY_MONGODB_URI;

if (!MY_MONGODB_URI) {
  throw new Error("Please define MY_MONGODB_URI in your environment variables");
}

let cached = global.mongoose || { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MY_MONGODB_URI, {
      dbName: "EidMubarakWebsite",
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

global.mongoose = cached;

export default connectDB;
