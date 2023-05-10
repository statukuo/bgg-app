import mongoose from "mongoose";
const { Schema, model } = mongoose;

const record = new Schema({
    name: String,
    position: String,
    level: String
});

const Record = model("Record", record);
export default Record;
