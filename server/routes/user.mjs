import { Router as expressRouter } from "express";
import User from "../models/users.mjs";

const router = expressRouter();

router.get("/current", async (req, res) => {
    const results = await User.findById(req.user.id);
    res.send(results).status(200);
});

router.patch("/current", async (req, res) => {
    const userToUpdate = await User.findById(req.user.id);

    userToUpdate.set({
        name: req.body.name,
        discordId: req.body.discordId,
        phoneNumber: req.body.phoneNumber
    });

    const result = await userToUpdate.save();

    res.send(result).status(200);
});

export default router;
