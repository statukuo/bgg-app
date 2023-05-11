import { Schema, model } from "mongoose";
import  findOrCreate from "mongoose-findorcreate";

const user = new Schema({
    name: String,
    email: String
});

user.plugin(findOrCreate);

const User = model("User", user);
export default User;
