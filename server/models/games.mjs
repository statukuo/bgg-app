import mongoose from "mongoose";
const { Schema, model } = mongoose;

const game = new Schema({
    imagePath: String,
    title: String,
    date: Date,
    duration: Number,
    maxPlayers: Number,
    players: Array,
    playersOnWait: Array
});

const Game = model("Game", game);
export default Game;
