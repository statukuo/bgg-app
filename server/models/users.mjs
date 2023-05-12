import { Schema, model } from "mongoose";

const user = new Schema({
    externalId: String,
    name: String,
    email: String,
    discordId: String,
    phoneNumber: String
});

const User = model("User", user);
export default User;
