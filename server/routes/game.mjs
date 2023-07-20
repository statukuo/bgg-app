import { Router as expressRouter } from "express";
import Game from "../models/games.mjs";

const router = expressRouter();

// This section will help you get a list of all the games.
router.get("/", async (req, res) => {
    const results = await Game.find();
    res.send(results).status(200);
});

// This section will help you get a single game by id
router.get("/:id", async (req, res) => {
    const result = await Game.findById(req.params.id);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section will help you create a new game.
router.post("/", async (req, res) => {
    const newGame = new Game({
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
    });
    const result = await newGame.save();
    res.send(result).status(204);
});

// This section will help you update a game by id.
router.patch("/:id", async (req, res) => {
    const gameToUpdate = await Game.findById(req.params.id);

    gameToUpdate.set({
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
    });

    const result = await gameToUpdate.save();

    res.send(result).status(200);
});

// This section will help you delete a game
router.delete("/:id", async (req, res) => {
    const result = await Game.findByIdAndDelete(req.params.id);

    res.send(result).status(200);
});

export default router;
