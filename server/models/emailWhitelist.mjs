import { Schema, model } from "mongoose";

const emailWhitelist = new Schema({
    email: String
});

const EmailWhitelist = model("EmailWhitelist", emailWhitelist);
export default EmailWhitelist;
