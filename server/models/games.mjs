import mongoose from "mongoose";
const { Schema, model } = mongoose;

const game = new Schema({
    name: String,
    position: String,
    level: String
});

const Game = model("Game", game);
export default Game;
