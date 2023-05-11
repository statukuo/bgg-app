import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

try {
    await mongoose.connect(connectionString);
} catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
}
