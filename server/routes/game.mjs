import { Router as expressRouter } from "express";
import Game from "../models/games.mjs";
const router = expressRouter();

router.get("/", async (req, res) => {
    const results = await Game.find();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    const result = await Game.findById(req.params.id);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    const newGame = new Game({
        imagePath: req.body.imagePath,
        title: req.body.title,
        date: req.body.date,
        duration: req.body.duration,
        maxPlayers: req.body.maxPlayers,
        players: req.body.players,
        playersOnWait: req.body.playersOnWait
    });
    const result = await newGame.save();
    res.send(result).status(204);
});

router.patch("/:id", async (req, res) => {
    const gameToUpdate = await Game.findById(req.params.id);

    gameToUpdate.set({
        imagePath: gameToUpdate.imagePath,
        title: gameToUpdate.title,
        date: gameToUpdate.date,
        duration: req.body.duration,
        maxPlayers: req.body.maxPlayers,
        players: req.body.players,
        playersOnWait: req.body.playersOnWait
    });

    const result = await gameToUpdate.save();

    res.send(result).status(200);
});

router.post("/join", async (req, res) => {
    if (!req.body.gameId || !req.body.userId) {
        res.send("Required data not sent. Required 'gameId' and 'userId'").status(412);
        return;
    }

    const gameToUpdate = await Game.findById(req.body.gameId);

    const currentUsersOnTheGame = gameToUpdate.players;
    if (currentUsersOnTheGame.find(userId => userId === req.body.userId)) {
        res.send("User is already on the list").status(417);
        return;
    }

    currentUsersOnTheGame.push(req.body.userId);

    gameToUpdate.set({
        players: currentUsersOnTheGame
    });

    const result = await gameToUpdate.save();

    res.send(result).status(200);
});

router.post("/leave", async (req, res) => {
    if (!req.body.gameId || !req.body.userId) {
        res.send("Required data not sent. Required 'gameId' and 'userId'").status(412);
        return;
    }

    const gameToUpdate = await Game.findById(req.body.gameId);

    const currentUsersOnTheGame = gameToUpdate.players;
    if (!currentUsersOnTheGame.find(userId => userId === req.body.userId)) {
        res.send("User is not on the list").status(417);
        return;
    }

    gameToUpdate.set({
        players: currentUsersOnTheGame.filter(userId => userId !== req.body.userId)
    });

    const result = await gameToUpdate.save();

    res.send(result).status(200);
});

router.delete("/:id", async (req, res) => {
    const result = await Game.findByIdAndDelete(req.params.id);

    res.send(result).status(200);
});

export default router;
