import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

try {
  await mongoose.connect(connectionString);
} catch(e) {
  console.error(e);
}
