import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

try {
    await mongoose.connect(connectionString);
    mongoose.set("useCreateIndex", true);
} catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
}
